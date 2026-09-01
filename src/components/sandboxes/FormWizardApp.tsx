import React, { useState } from 'react';
import { User, Shield, CheckCircle, ChevronRight, ChevronLeft, Send, Sparkles } from 'lucide-react';
import { RenderFlashingBox } from '../common/RenderFlashingBox';
import { CodeBlock } from '../common/CodeBlock';
import { useProgress } from '../../context/ProgressContext';

interface FormData {
  username: string;
  email: string;
  role: string;
  experience: string;
  newsletter: boolean;
}

export const FormWizardApp: React.FC = () => {
  const { playTone } = useProgress();

  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    role: 'Frontend Engineer',
    experience: 'Intermediate (2-4 yrs)',
    newsletter: true,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    playTone('step');
    setFormData(prev => ({
      ...prev,
      [name]: val
    }));
  };

  const handleNextStep = () => {
    if (step === 1 && (!formData.username.trim() || !formData.email.trim())) {
      playTone('error');
      alert('Please fill out both Username and Email');
      return;
    }
    playTone('click');
    setStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    playTone('click');
    setStep(prev => Math.max(1, prev - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playTone('success');
    setSubmitted(true);
  };

  const handleReset = () => {
    playTone('step');
    setStep(1);
    setSubmitted(false);
    setFormData({
      username: '',
      email: '',
      role: 'Frontend Engineer',
      experience: 'Intermediate (2-4 yrs)',
      newsletter: true,
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* Wizard Form Widget */}
      <div className="lg:col-span-7 space-y-4">
        <RenderFlashingBox label="FormWizardComponent" flashColor="purple">
          <div className="space-y-6">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-semibold transition-all ${
                    step === i
                      ? 'bg-purple-500 text-white ring-2 ring-purple-400/40'
                      : step > i
                      ? 'bg-emerald-500 text-slate-950'
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    {step > i ? '✓' : i}
                  </div>
                  <span className="text-xs font-medium text-slate-300 hidden sm:inline">
                    {i === 1 ? 'Profile' : i === 2 ? 'Experience' : 'Review'}
                  </span>
                </div>
              ))}
            </div>

            {/* Form Steps */}
            {!submitted ? (
              <div className="space-y-4">
                {step === 1 && (
                  <div className="space-y-3 animate-fadeIn">
                    <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                      <User className="w-4 h-4 text-purple-400" />
                      <span>Step 1: Account Information</span>
                    </h4>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Username</label>
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        placeholder="e.g. react_ninja"
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-purple-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="dev@example.com"
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-purple-400"
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-3 animate-fadeIn">
                    <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                      <Shield className="w-4 h-4 text-purple-400" />
                      <span>Step 2: Professional Profile</span>
                    </h4>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Primary Role</label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-purple-400"
                      >
                        <option value="Frontend Engineer">Frontend Engineer</option>
                        <option value="Fullstack Engineer">Fullstack Engineer</option>
                        <option value="UI/UX Designer">UI/UX Designer</option>
                        <option value="Student / Hobbyist">Student / Hobbyist</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">React Experience</label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-purple-400"
                      >
                        <option value="Beginner (< 1 yr)">Beginner (&lt; 1 yr)</option>
                        <option value="Intermediate (2-4 yrs)">Intermediate (2-4 yrs)</option>
                        <option value="Senior / Lead (5+ yrs)">Senior / Lead (5+ yrs)</option>
                      </select>
                    </div>
                    <label className="flex items-center gap-2 pt-2 cursor-pointer text-xs text-slate-300">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleInputChange}
                        className="w-4 h-4 rounded text-purple-500 bg-slate-900 border-slate-700"
                      />
                      <span>Receive React tips and visual guides newsletter</span>
                    </label>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-3 animate-fadeIn">
                    <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>Step 3: Review & Submit</span>
                    </h4>
                    <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 space-y-2 text-xs font-mono">
                      <div><span className="text-slate-500">Username:</span> <span className="text-white font-semibold">{formData.username || '(None)'}</span></div>
                      <div><span className="text-slate-500">Email:</span> <span className="text-white font-semibold">{formData.email || '(None)'}</span></div>
                      <div><span className="text-slate-500">Role:</span> <span className="text-purple-300 font-semibold">{formData.role}</span></div>
                      <div><span className="text-slate-500">Experience:</span> <span className="text-purple-300 font-semibold">{formData.experience}</span></div>
                      <div><span className="text-slate-500">Newsletter:</span> <span className="text-emerald-400 font-semibold">{formData.newsletter ? 'Yes' : 'No'}</span></div>
                    </div>
                  </div>
                )}

                {/* Step Controls */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="flex items-center gap-1 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  ) : <div />}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="flex items-center gap-1 px-5 py-2 rounded-lg bg-purple-500 hover:bg-purple-400 text-slate-950 text-xs font-semibold"
                    >
                      <span>Next Step</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="flex items-center gap-1.5 px-6 py-2 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-semibold"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Form</span>
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="py-8 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-white">Form Successfully Submitted!</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  State was preserved across all 3 steps in a single cohesive object.
                </p>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                >
                  Start Over
                </button>
              </div>
            )}

          </div>
        </RenderFlashingBox>
      </div>

      {/* Code Inspector */}
      <div className="lg:col-span-5 space-y-4">
        <div className="p-5 rounded-lg bg-slate-900/40 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Consolidated Form Handler Pattern</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Instead of 5 separate <code className="text-purple-300 font-mono">useState</code> hooks and 5 change handlers, use a single state object with a dynamic computed property key:
          </p>

          <CodeBlock
            filename="FormStatePattern.jsx"
            code={`function handleChange(e) {
  const { name, value } = e.target;
  // Computed property name [name]
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
}`}
          />
        </div>
      </div>

    </div>
  );
};
