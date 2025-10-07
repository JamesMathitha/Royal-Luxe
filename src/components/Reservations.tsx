import { useState, FormEvent } from 'react';
import { supabase, Reservation } from '../lib/supabase';
import { Calendar, Clock, Users, CheckCircle, AlertCircle } from 'lucide-react';

export default function Reservations() {
  const [formData, setFormData] = useState<Reservation>({
    guest_name: '',
    email: '',
    phone: '',
    party_size: 2,
    reservation_date: '',
    reservation_time: '',
    special_requests: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { error } = await supabase
        .from('reservations')
        .insert([formData]);

      if (error) throw error;

      setStatus('success');
      setMessage('Your reservation has been submitted successfully! We will contact you shortly to confirm.');
      setFormData({
        guest_name: '',
        email: '',
        phone: '',
        party_size: 2,
        reservation_date: '',
        reservation_time: '',
        special_requests: '',
      });

      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setMessage('Failed to submit reservation. Please try again.');
      console.error('Error submitting reservation:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'party_size' ? parseInt(value) : value,
    }));
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="reservations" className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Reserve Your Table
          </h2>
          <p className="text-lg text-gray-300">
            Secure your exclusive dining experience at Royal Luxe
          </p>
        </div>

        <div className="bg-slate-800 rounded-2xl shadow-2xl p-8 md:p-12">
          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-900/50 border border-green-500 rounded-lg flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-green-100">{message}</p>
            </div>
          )}

          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-red-100">{message}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="guest_name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="guest_name"
                  name="guest_name"
                  value={formData.guest_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="party_size" className="block text-sm font-medium text-gray-300 mb-2">
                  <Users className="inline h-4 w-4 mr-1" />
                  Party Size *
                </label>
                <select
                  id="party_size"
                  name="party_size"
                  value={formData.party_size}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white"
                >
                  {[...Array(20)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="reservation_date" className="block text-sm font-medium text-gray-300 mb-2">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Date *
                </label>
                <input
                  type="date"
                  id="reservation_date"
                  name="reservation_date"
                  value={formData.reservation_date}
                  onChange={handleChange}
                  min={today}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white"
                />
              </div>

              <div>
                <label htmlFor="reservation_time" className="block text-sm font-medium text-gray-300 mb-2">
                  <Clock className="inline h-4 w-4 mr-1" />
                  Time *
                </label>
                <input
                  type="time"
                  id="reservation_time"
                  name="reservation_time"
                  value={formData.reservation_time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="special_requests" className="block text-sm font-medium text-gray-300 mb-2">
                Special Requests (Optional)
              </label>
              <textarea
                id="special_requests"
                name="special_requests"
                value={formData.special_requests}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="Any dietary restrictions, allergies, or special occasions..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-gray-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              {status === 'loading' ? 'Submitting...' : 'Reserve Table'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
