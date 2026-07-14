/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import QuestionnaireForm from './components/QuestionnaireForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white selection:bg-[#AC2E46]/30 selection:text-[#AC2E46] scroll-smooth">
      {/* Sticky Premium Navigation */}
      <Header />

      {/* Main Structural Layout */}
      <main>
        {/* Cinematic Hero */}
        <Hero />

        {/* Intuitive Services Section with visual list */}
        <Services />

        {/* Modern Questionnaire Form */}
        <QuestionnaireForm />
      </main>

      {/* Minimalist Foot Block */}
      <Footer />
    </div>
  );
}
