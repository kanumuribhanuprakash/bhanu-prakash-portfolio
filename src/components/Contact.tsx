import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  GraduationCap,
  Briefcase,
  Github,
  Linkedin,
  Code2,
  Copy,
  Check,
  Send,
  ExternalLink,
  ShieldCheck,
  AlertCircle,
  Sparkles,
  RotateCcw,
} from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  // State for copying email addresses
  const [copiedType, setCopiedType] = useState<'student' | 'professional' | null>(null);
  const [copyError, setCopyError] = useState<string | null>(null);

  // Form state for prefilled message
  const [formData, setFormData] = useState({
    recipient: 'professional' as 'professional' | 'student',
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Validation errors
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [formStatus, setFormStatus] = useState<'idle' | 'launched'>('idle');

  const studentEmail = PERSONAL_INFO.studentEmail || 'bkanumur@student.gitam.edu';
  const professionalEmail = PERSONAL_INFO.professionalEmail || 'kanumuribhanupraksah9@gmail.com';

  // Helper to generate the mailto link dynamically with current form fields and selected recipient
  const buildMailtoUrl = (recipientType = formData.recipient) => {
    const selectedRecipient =
      recipientType === 'student' ? studentEmail : professionalEmail;

    const subjectText =
      formData.subject.trim() ||
      `Inquiry from ${formData.name.trim() || 'Visitor'} via Portfolio`;

    const bodyText = [
      `Hello K. Bhanu Prakash,`,
      ``,
      formData.message.trim(),
      ``,
      `---`,
      `From: ${formData.name.trim() || 'Not specified'}`,
      `Sender Email: ${formData.email.trim() || 'Not specified'}`,
    ].join('\n');

    return `mailto:${selectedRecipient}?subject=${encodeURIComponent(
      subjectText
    )}&body=${encodeURIComponent(bodyText)}`;
  };

  // Robust clipboard copy with fallback
  const handleCopyEmail = async (email: string, type: 'student' | 'professional') => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        textArea.remove();
        if (!successful) {
          throw new Error('Fallback copy failed');
        }
      }

      setCopiedType(type);
      setCopyError(null);
      setTimeout(() => {
        setCopiedType((prev) => (prev === type ? null : prev));
      }, 2500);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
      setCopyError(`Unable to copy automatically. Please select and copy: ${email}`);
      setTimeout(() => setCopyError(null), 5000);
    }
  };

  // Validate fields
  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Your name is required.';
    }

    const emailTrimmed = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailTrimmed) {
      newErrors.email = 'Your email address is required.';
    } else if (!emailRegex.test(emailTrimmed)) {
      newErrors.email = 'Please enter a valid email format (e.g. name@example.com).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Prefilled message submit handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const mailtoUrl = buildMailtoUrl();
    setFormStatus('launched');

    // Trigger mail client launch safely without breaking navigation in sandboxed iframes
    try {
      const link = document.createElement('a');
      link.href = mailtoUrl;
      link.target = '_top';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch {
      window.location.href = mailtoUrl;
    }
  };

  // When changing recipient, update form state and clear recipient-specific concerns
  const handleSelectRecipient = (recipient: 'professional' | 'student') => {
    setFormData((prev) => ({ ...prev, recipient }));
  };

  const currentMailtoUrl = buildMailtoUrl();
  const currentRecipientEmail =
    formData.recipient === 'student' ? studentEmail : professionalEmail;
  const currentRecipientLabel =
    formData.recipient === 'student'
      ? 'Official / GITAM Student Email'
      : 'Professional Email';

  return (
    <section id="contact" className="py-24 lg:py-32 relative border-t border-blue-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-2">
            <span>Direct Communication</span>
            <span className="text-slate-500" aria-hidden="true">·</span>
            <span>Get in Touch</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Connect & Collaborate
          </h2>
          <p className={`text-base mt-2.5 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Reach out directly for discussions on AI/ML architectures, full-stack development, student collaborations, or academic inquiries. Both verified email addresses and online profiles are provided below.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Email Addresses & Verified Profiles */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Address 1: GITAM Student Email Card */}
            <div
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 ${
                darkMode
                  ? 'bg-[#0c1222]/80 border-blue-900/40 shadow-xl shadow-black/30 hover:border-cyan-500/35'
                  : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-3.5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                      Official / GITAM Student Email
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Academic & Coursework Inquiries
                    </span>
                  </div>
                </div>
              </div>

              {/* Clearly visible address for easy manual copying */}
              <div
                className={`p-3 rounded-xl border font-mono text-xs sm:text-sm break-all select-all mb-4 ${
                  darkMode
                    ? 'bg-[#060a14] border-blue-950 text-slate-200'
                    : 'bg-slate-50 border-slate-200 text-slate-800'
                }`}
                title="Click and select to copy manually if desired"
              >
                {studentEmail}
              </div>

              {/* Action Buttons: Send Direct Email & Copy Email */}
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={`mailto:${studentEmail}`}
                  className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-center text-xs font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white transition-all shadow-sm active:scale-[0.98]"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Direct Email</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleCopyEmail(studentEmail, 'student')}
                  className={`flex-1 min-w-[120px] inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-medium rounded-xl border transition-all duration-200 ${
                    copiedType === 'student'
                      ? 'border-emerald-500/50 bg-emerald-950/40 text-emerald-400'
                      : darkMode
                      ? 'border-blue-900/40 bg-slate-900/60 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-cyan-500/40'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                  aria-label="Copy GITAM Student Email address"
                >
                  {copiedType === 'student' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="font-semibold text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Email Address 2: Professional Email Card */}
            <div
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 ${
                darkMode
                  ? 'bg-[#0c1222]/80 border-blue-900/40 shadow-xl shadow-black/30 hover:border-blue-500/35'
                  : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-3.5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-600/15 text-blue-400 border border-blue-500/20">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-blue-400 uppercase tracking-wider">
                      Professional Email
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Projects, Engineering & Collaboration
                    </span>
                  </div>
                </div>
              </div>

              {/* Clearly visible address for easy manual copying */}
              <div
                className={`p-3 rounded-xl border font-mono text-xs sm:text-sm break-all select-all mb-4 ${
                  darkMode
                    ? 'bg-[#060a14] border-blue-950 text-slate-200'
                    : 'bg-slate-50 border-slate-200 text-slate-800'
                }`}
                title="Click and select to copy manually if desired"
              >
                {professionalEmail}
              </div>

              {/* Action Buttons: Send Direct Email & Copy Email */}
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={`mailto:${professionalEmail}`}
                  className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-center text-xs font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white transition-all shadow-sm active:scale-[0.98]"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Direct Email</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleCopyEmail(professionalEmail, 'professional')}
                  className={`flex-1 min-w-[120px] inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-medium rounded-xl border transition-all duration-200 ${
                    copiedType === 'professional'
                      ? 'border-emerald-500/50 bg-emerald-950/40 text-emerald-400'
                      : darkMode
                      ? 'border-blue-900/40 bg-slate-900/60 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-blue-500/40'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                  aria-label="Copy Professional Email address"
                >
                  {copiedType === 'professional' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="font-semibold text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Error Notification Banner if Clipboard fails */}
            {copyError && (
              <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-800/50 text-amber-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{copyError}</span>
              </div>
            )}

            {/* Verified Platforms List */}
            <div
              className={`p-6 sm:p-7 rounded-3xl border space-y-3.5 ${
                darkMode ? 'bg-[#0c1222]/50 border-blue-950/80' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Verified Online Profiles
              </span>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all duration-200 ${
                  darkMode
                    ? 'border-blue-950 bg-[#060a14]/60 text-slate-200 hover:border-cyan-500/40 hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                    : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-slate-300" />
                  <div>
                    <span className="text-xs font-semibold block">GitHub</span>
                    <span className="text-[11px] text-slate-500 font-mono">kanumuribhanuprakash</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all duration-200 ${
                  darkMode
                    ? 'border-blue-950 bg-[#060a14]/60 text-slate-200 hover:border-cyan-500/40 hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                    : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <div>
                    <span className="text-xs font-semibold block">LinkedIn</span>
                    <span className="text-[11px] text-slate-500">K. Bhanu Prakash</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>

              {/* LeetCode */}
              <a
                href={PERSONAL_INFO.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all duration-200 ${
                  darkMode
                    ? 'border-blue-950 bg-[#060a14]/60 text-slate-200 hover:border-amber-500/40 hover:text-white hover:shadow-[0_0_15px_rgba(245,158,11,0.1)]'
                    : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Code2 className="w-4 h-4 text-amber-400" />
                  <div>
                    <span className="text-xs font-semibold block">LeetCode</span>
                    <span className="text-[11px] text-slate-500 font-mono">Kanumuribahnuprakash</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

            {/* Privacy Protection Notice */}
            <div className="flex items-center gap-2.5 text-xs text-slate-500 px-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Privacy safeguarded: No personal phone numbers or physical addresses are published.
              </span>
            </div>
          </div>

          {/* Right Column: Prefilled Message Composer */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                darkMode
                  ? 'bg-[#0c1222]/80 border-blue-900/40 shadow-xl shadow-black/30'
                  : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Prefill an Email Message
                </h3>
                <span className="text-[11px] font-mono text-cyan-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  mailto: Composer
                </span>
              </div>
              <p className={`text-xs mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Prepare your subject and message below. Clicking <em>Open in Email App</em> will trigger your configured mail software with all fields properly prefilled.
              </p>

              <form onSubmit={handleFormSubmit} noValidate className="space-y-4">
                {/* Recipient Selector */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Send Inquiry To
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => handleSelectRecipient('professional')}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        formData.recipient === 'professional'
                          ? 'border-blue-500 bg-blue-600/15 text-white shadow-sm ring-1 ring-blue-500/50'
                          : darkMode
                          ? 'border-blue-950 bg-[#060a14] text-slate-400 hover:text-slate-200'
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold">Professional Email</span>
                        {formData.recipient === 'professional' && (
                          <span className="w-2 h-2 rounded-full bg-cyan-400" />
                        )}
                      </div>
                      <span className="text-[11px] font-mono opacity-80 block truncate">
                        {professionalEmail}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSelectRecipient('student')}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        formData.recipient === 'student'
                          ? 'border-cyan-500 bg-cyan-500/15 text-white shadow-sm ring-1 ring-cyan-500/50'
                          : darkMode
                          ? 'border-blue-950 bg-[#060a14] text-slate-400 hover:text-slate-200'
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold">GITAM Student Email</span>
                        {formData.recipient === 'student' && (
                          <span className="w-2 h-2 rounded-full bg-cyan-400" />
                        )}
                      </div>
                      <span className="text-[11px] font-mono opacity-80 block truncate">
                        {studentEmail}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Sender Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
                    >
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Sharma"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) {
                          setErrors((prev) => ({ ...prev, name: undefined }));
                        }
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs transition-all ${
                        errors.name
                          ? 'border-rose-500/80 bg-rose-950/20 text-slate-100 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                          : darkMode
                          ? 'bg-[#060a14] border-blue-950 text-slate-100 placeholder-slate-500 focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-600'
                      } focus:outline-none`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-rose-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
                    >
                      Your Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="alex@domain.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) {
                          setErrors((prev) => ({ ...prev, email: undefined }));
                        }
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs transition-all ${
                        errors.email
                          ? 'border-rose-500/80 bg-rose-950/20 text-slate-100 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                          : darkMode
                          ? 'bg-[#060a14] border-blue-950 text-slate-100 placeholder-slate-500 focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-600'
                      } focus:outline-none`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-rose-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Line */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Project collaboration, academic inquiry, or question"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs transition-all ${
                      darkMode
                        ? 'bg-[#060a14] border-blue-950 text-slate-100 placeholder-slate-500 focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20'
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-600'
                    } focus:outline-none`}
                  />
                </div>

                {/* Message Body */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
                  >
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) {
                        setErrors((prev) => ({ ...prev, message: undefined }));
                      }
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs transition-all ${
                      errors.message
                        ? 'border-rose-500/80 bg-rose-950/20 text-slate-100 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                        : darkMode
                        ? 'bg-[#060a14] border-blue-950 text-slate-100 placeholder-slate-500 focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20'
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-600'
                    } focus:outline-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[11px] text-rose-400">{errors.message}</p>
                  )}
                </div>

                {/* Notice & Submit Action */}
                <div className="pt-2 flex flex-col gap-3">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 shadow-md shadow-blue-600/20 active:scale-[0.98]"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Open in Email App</span>
                    </button>

                    <span className="text-[11px] text-slate-500 text-center sm:text-right">
                      Opens your mail client addressed to {currentRecipientLabel}
                    </span>
                  </div>

                  {/* Neutral confirmation banner with dynamic retry link adhering to requirements 1, 2, 3 & 5 */}
                  {formStatus === 'launched' && (
                    <div
                      className={`p-4 rounded-2xl border text-xs transition-all ${
                        darkMode
                          ? 'bg-blue-950/30 border-blue-800/40 text-blue-200'
                          : 'bg-blue-50 border-blue-200 text-blue-900'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <div className="space-y-1.5 flex-1">
                          <p className="font-semibold text-cyan-300">
                            Your email app should open with your message prefilled.
                          </p>
                          <p className="text-[11px] text-slate-300 leading-relaxed">
                            Target address: <code className="font-mono text-cyan-300 font-semibold">{currentRecipientEmail}</code> ({currentRecipientLabel}).
                          </p>
                          <p className="text-[11px] text-slate-300 leading-relaxed">
                            If it doesn't open automatically, use the{' '}
                            <a
                              href={currentMailtoUrl}
                              className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300 font-semibold inline-flex items-center gap-1"
                              title={`Retry opening prefilled email to ${currentRecipientEmail}`}
                            >
                              <RotateCcw className="w-3 h-3 inline" />
                              <span>retry link below</span>
                            </a>
                            , or copy the email address directly from the left column.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
