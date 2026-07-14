import React, { useState, useEffect } from 'react';
import { 
  User, Mail, Phone, Calendar, MapPin, 
  Sparkles, Send, CheckCircle2, Trash2, History 
} from 'lucide-react';
import { QuestionnaireResponse } from '../types';
import CONTACT_BG_IMAGE from '../assets/images/stunts_contact_bg_1783932447394.jpg';

const MOOD_OPTIONS = [
  'At the STUNTS Studio',
  'Client Location',
  'Not Sure Yet'
];

export default function QuestionnaireForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    packageName: '',
    eventDate: '',
    location: '',
    visualMood: [] as string[],
    notes: ''
  });

  const [submissions, setSubmissions] = useState<QuestionnaireResponse[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentSubmission, setCurrentSubmission] = useState<QuestionnaireResponse | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const [error, setError] = useState('');

  // Load previous submissions on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('stunts_submissions');
      if (stored) {
        setSubmissions(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error loading submissions', e);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const toggleMood = (mood: string) => {
    setFormData(prev => {
      const moods = prev.visualMood.includes(mood)
        ? []
        : [mood];
      return { ...prev, visualMood: moods };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.serviceType) {
      setError('Please fill out Name, Email, and select a Service Type.');
      return;
    }

    const referenceId = 'STN-' + Math.floor(100000 + Math.random() * 900000);
    const newSubmission: QuestionnaireResponse = {
      id: referenceId,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      serviceType: formData.serviceType,
      packageId: 'Custom Project',
      eventDate: formData.eventDate || 'To be determined',
      location: 'Studio',
      budget: 'Custom Estimate Needed',
      visualMood: formData.visualMood,
      notes: formData.notes,
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    const updated = [newSubmission, ...submissions];
    setSubmissions(updated);
    localStorage.setItem('stunts_submissions', JSON.stringify(updated));

    setCurrentSubmission(newSubmission);
    setIsSubmitted(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: '',
      packageName: '',
      eventDate: '',
      location: '',
      visualMood: [],
      notes: ''
    });
  };

  const deleteSubmission = (id: string) => {
    const updated = submissions.filter(sub => sub.id !== id);
    setSubmissions(updated);
    localStorage.setItem('stunts_submissions', JSON.stringify(updated));
  };

  return (
    <section id="questionnaire" className="py-24 bg-zinc-50 text-neutral-900 relative overflow-hidden border-t border-zinc-200">
      
      {/* Background Graphic Header */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <img 
          src={CONTACT_BG_IMAGE} 
          alt="Contact and Inquiries Background Studio"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#AC2E46]/10 border border-[#AC2E46]/20 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#8B1E32]" />
            <span className="font-mono text-[9px] lg:text-[11px] tracking-[0.25em] text-[#8B1E32] uppercase font-semibold">
              WORK WITH US
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-4">
            Start Your Booking
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Complete the short questionnaire below and tell us about your project. We'll be in touch to discuss the details and your preferred booking date.
          </p>
        </div>

        {/* History Toggle Button if any exist */}
        {submissions.length > 0 && (
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-white border border-zinc-200 hover:border-[#AC2E46]/60 hover:bg-zinc-50 text-zinc-700 hover:text-neutral-900 transition-all text-xs font-mono tracking-widest uppercase cursor-pointer shadow-sm"
            >
              <History className="w-4 h-4 text-[#8B1E32]" />
              {showHistory ? 'Hide My Submissions' : `View My Submissions (${submissions.length})`}
            </button>
          </div>
        )}

        {/* Submissions History Pane */}
        {showHistory && submissions.length > 0 && (
          <div className="bg-white border border-zinc-200 rounded-sm p-6 sm:p-8 mb-12 max-h-[450px] overflow-y-auto space-y-6 shadow-md">
            <h3 className="font-display text-lg font-bold text-neutral-900 border-b border-zinc-100 pb-4 flex justify-between items-center">
              <span>Your Bookings & Inquiries</span>
              <span className="font-mono text-xs text-zinc-400 font-normal">Stored Locally</span>
            </h3>
            <div className="space-y-4">
              {submissions.map((sub) => (
                <div key={sub.id} className="p-5 bg-zinc-50 border border-zinc-200 rounded-sm relative group">
                  <button
                    onClick={() => deleteSubmission(sub.id)}
                    className="absolute top-4 right-4 text-zinc-400 hover:text-red-600 p-1 rounded transition-colors"
                    aria-label="Delete Submission"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] tracking-widest text-[#8B1E32] uppercase bg-[#AC2E46]/10 px-2 py-0.5 rounded-sm">
                          {sub.id}
                        </span>
                        <span className="text-zinc-400 font-mono text-[10px]">{sub.createdAt}</span>
                      </div>
                      <h4 className="font-display font-semibold text-neutral-900 mt-2 text-base">{sub.name}</h4>
                      <p className="text-zinc-500 text-xs mt-1 font-mono">{sub.email} • {sub.phone || 'No Phone'}</p>
                    </div>
                    <div className="text-zinc-650 text-xs space-y-1 sm:text-right sm:border-l sm:border-zinc-200 sm:pl-4">
                      <p><strong className="text-zinc-400 uppercase font-mono tracking-wider text-[10px]">Service:</strong> <span className="text-neutral-800">{sub.serviceType}</span></p>
                      <p><strong className="text-zinc-400 uppercase font-mono tracking-wider text-[10px]">Preferred Date:</strong> <span className="text-neutral-800">{sub.eventDate}</span></p>
                    </div>
                  </div>

                  {sub.visualMood.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5 border-t border-zinc-100 pt-3">
                      {sub.visualMood.map(m => (
                        <span key={m} className="bg-zinc-200/60 text-zinc-700 font-mono text-[9px] px-2 py-0.5 rounded-full">
                          {m}
                        </span>
                      ))}
                    </div>
                  )}

                  {sub.notes && (
                    <div className="mt-3 bg-white border border-zinc-150 p-3 rounded-sm text-zinc-600 text-xs italic font-light">
                      &ldquo;{sub.notes}&rdquo;
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sleek Questionnaire Card Form */}
        <div className="bg-white border border-zinc-200 rounded-sm p-6 sm:p-10 shadow-xl">
          
          {isSubmitted && currentSubmission ? (
            /* Success confirmation screen with subtle animations */
            <div className="text-center py-12 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#AC2E46]/10 border border-[#AC2E46]/30 flex items-center justify-center text-[#8B1E32] mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 animate-pulse" />
              </div>
              <h3 className="font-display text-2xl font-bold text-neutral-900 mb-2">
                Thank You, {currentSubmission.name}!
              </h3>
              <p className="text-zinc-600 text-sm max-w-md mx-auto font-light leading-relaxed mb-6">
                Your questionnaire response has been submitted successfully. We have preserved your local reference token.
              </p>

              {/* Submission ticket card */}
              <div className="max-w-md mx-auto bg-zinc-50 border border-zinc-200 rounded-sm p-6 text-left mb-8 space-y-4 shadow-inner">
                <div className="flex justify-between items-center border-b border-zinc-200 pb-3">
                  <span className="font-mono text-xs text-zinc-500">REFERENCE NUMBER</span>
                  <span className="font-mono text-sm font-bold text-[#8B1E32]">{currentSubmission.id}</span>
                </div>
                <div className="space-y-2 text-xs">
                  <p><strong className="text-zinc-500 uppercase font-mono tracking-wider">Service:</strong> <span className="text-neutral-800 font-medium">{currentSubmission.serviceType}</span></p>
                  <p><strong className="text-zinc-500 uppercase font-mono tracking-wider">Preferred Date:</strong> <span className="text-neutral-800 font-medium">{currentSubmission.eventDate}</span></p>
                  {currentSubmission.visualMood.length > 0 && (
                    <p><strong className="text-zinc-500 uppercase font-mono tracking-wider">Selected Vibes:</strong> <span className="text-[#8B1E32] font-medium">{currentSubmission.visualMood.join(', ')}</span></p>
                  )}
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#AC2E46] hover:bg-[#8B1E32] text-white font-mono font-bold text-xs tracking-widest px-6 py-3 rounded-sm transition-all cursor-pointer shadow-md"
                >
                  SUBMIT NEW FORM
                </button>
                <button
                  onClick={() => {
                    setShowHistory(true);
                    // Scroll history into view
                    setTimeout(() => {
                      document.getElementById('questionnaire')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-mono text-xs tracking-widest px-6 py-3 rounded-sm border border-zinc-300 transition-all cursor-pointer"
                >
                  VIEW HISTORY
                </button>
              </div>
            </div>
          ) : (
            /* Main Form Frame */
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs font-mono rounded-sm">
                  {error}
                </div>
              )}

              {/* Step 1: Contact Information */}
              <div className="space-y-6">
                <h3 className="font-mono text-xs tracking-widest text-zinc-500 uppercase border-b border-zinc-200 pb-2">
                  01. Contact Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Name field */}
                  <div className="relative">
                    <label htmlFor="form-name" className="block text-zinc-600 text-xs font-mono mb-2">FULL NAME *</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                      <input
                        id="form-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Sipho Dlamini"
                        className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#AC2E46] focus:bg-white rounded-sm py-3 pl-11 pr-4 text-sm text-neutral-900 placeholder-zinc-400 focus:outline-none transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="relative">
                    <label htmlFor="form-email" className="block text-zinc-600 text-xs font-mono mb-2">EMAIL ADDRESS *</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                      <input
                        id="form-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. sipho.dlamini@gmail.com"
                        className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#AC2E46] focus:bg-white rounded-sm py-3 pl-11 pr-4 text-sm text-neutral-900 placeholder-zinc-400 focus:outline-none transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone field */}
                  <div className="relative">
                    <label htmlFor="form-phone" className="block text-zinc-600 text-xs font-mono mb-2">PHONE / WHATSAPP</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                      <input
                        id="form-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +27 82 123 4567"
                        className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#AC2E46] focus:bg-white rounded-sm py-3 pl-11 pr-4 text-sm text-neutral-900 placeholder-zinc-400 focus:outline-none transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Service Customization */}
              <div className="space-y-6">
                <h3 className="font-mono text-xs tracking-widest text-zinc-500 uppercase border-b border-zinc-200 pb-2">
                  02. Production Scope & Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Service selection */}
                  <div>
                    <label htmlFor="questionnaire-service" className="block text-zinc-600 text-xs font-mono mb-2">SERVICE *</label>
                    <select
                      id="questionnaire-service"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#AC2E46] focus:bg-white rounded-sm py-3 px-4 text-sm text-neutral-900 focus:outline-none transition-all duration-200"
                      required
                    >
                      <option value="" className="text-zinc-400">What can we help you with?</option>
                      <option value="Photography">Photography</option>
                      <option value="Videography">Videography</option>
                      <option value="Podcast Studio">Podcast Studio</option>
                      <option value="Studio Hire">Studio Hire</option>
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label htmlFor="form-eventDate" className="block text-zinc-600 text-xs font-mono mb-2">PREFERRED DATE *</label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                      <input
                        id="form-eventDate"
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#AC2E46] focus:bg-white rounded-sm py-3 pl-11 pr-4 text-sm text-neutral-900 focus:outline-none transition-all duration-200"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Aesthetic/Vibe Selection */}
              <div className="space-y-4">
                <h3 className="block text-zinc-600 text-xs font-mono uppercase border-b border-zinc-200 pb-2">
                  03. Where will the shoot take place?
                </h3>
                <p className="text-zinc-500 text-xs font-light">
                  Whether it's in our studio or at your location, we'll come prepared.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {MOOD_OPTIONS.map((mood) => {
                    const isSelected = formData.visualMood.includes(mood);
                    return (
                      <button
                        key={mood}
                        type="button"
                        onClick={() => toggleMood(mood)}
                        className={`font-mono text-xs py-2.5 px-4 rounded-full border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#AC2E46] text-white border-[#AC2E46] font-bold shadow-sm'
                            : 'bg-zinc-50 border-zinc-200 hover:border-zinc-300 text-zinc-600 hover:text-neutral-900'
                        }`}
                      >
                        {mood}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Narrative Description */}
              <div className="space-y-4">
                <label htmlFor="questionnaire-notes" className="block text-zinc-600 text-xs font-mono uppercase">
                  04. Tell us a little more (Optional)
                </label>
                <textarea
                  id="questionnaire-notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Share any important details about your project, ideas, or requirements."
                  className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#AC2E46] focus:bg-white rounded-sm p-4 text-sm text-neutral-900 placeholder-zinc-400 focus:outline-none transition-all duration-200 resize-y font-light leading-relaxed"
                ></textarea>
              </div>

              {/* Submit Action */}
              <div className="border-t border-zinc-200 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-zinc-500 text-xs font-light">
                  Thanks for reaching out. We'll review your enquiry and respond within 24 hours.
                </p>
                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 bg-[#AC2E46] hover:bg-[#8B1E32] text-white font-mono font-bold text-xs tracking-widest px-8 py-4 rounded-sm transition-all duration-300 transform active:scale-95 shadow-lg shadow-[#AC2E46]/10 cursor-pointer uppercase shrink-0"
                >
                  Submit Enquiry
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
