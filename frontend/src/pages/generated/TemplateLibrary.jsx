import React from 'react';
import { useNavigate } from 'react-router-dom';

const TemplateLibrary = () => {
  const navigate = useNavigate();
  const [categories] = React.useState([
    { id: 'pm', name: 'Project Management', icon: 'rocket_launch', color: 'blue' },
    { id: 'edu', name: 'Education', icon: 'school', color: 'emerald' },
    { id: 'personal', name: 'Personal', icon: 'person', color: 'indigo' },
    { id: 'wellness', name: 'Wellness', icon: 'favorite', color: 'rose' }
  ]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/*  Hero Section  */}
      <section className="relative rounded-[2.5rem] overflow-hidden h-72 mb-12 shadow-2xl group">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="clean minimal office workspace with multiple screens and organized desk layout in soft bright natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFQ_vT32M8_HrCQ0lE_Ilm4fRsoYoO3Ln_z_OsvQoIAtvg0mEhT7ouo5W9pKJyZAdx8qulX2wc4C5Uug_aEtQaKcibqL88ZU58Rfk0Ff8EBFVOqIs86HIqTWRsW0xeNgUtladYBbN0sU9ZvUYMYZA9SsMok2bzaB-2qyYebkUkatkyLTAiuIyUU6gTGTDv4HMP-boVsD1-mSqsjxztZpL-9A0u-JntELyIFRuwNgJCjw6pXBO8WlBrrUAGKIF19j8YXkyRprdKkmUo"/>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/40 to-transparent"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center px-12 max-w-2xl">
          <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-4">Jumpstart your flow</span>
          <h1 className="text-5xl font-black text-white mb-4 tracking-tight leading-none">Template Library</h1>
          <p className="text-lg font-bold text-blue-100 leading-relaxed">Choose a pre-built layout to jumpstart your project. From agile sprints to classroom planning, we've got you covered.</p>
        </div>
      </section>

      {/* Categories Horizontal Scroll */}
      <div className="flex gap-4 mb-12 overflow-x-auto pb-4 hide-scrollbar">
        {categories.map(cat => (
          <button key={cat.id} className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-sm">
            <span className={`material-symbols-outlined text-${cat.color}-600`}>{cat.icon}</span>
            <span className="font-black text-slate-900 dark:text-white text-sm whitespace-nowrap">{cat.name}</span>
          </button>
        ))}
      </div>
  );
};

export default TemplateLibrary;
