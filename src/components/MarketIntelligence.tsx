import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Map as MapIcon, 
  Bell, 
  ArrowUpRight, 
  ArrowDownRight, 
  ChevronDown,
  Info,
  Droplets,
  Sprout,
  Zap
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { cn } from '@/src/lib/utils';

const priceData = [
  { date: 'Jun 01', price: 2450, type: 'historical' },
  { date: 'Jun 03', price: 2480, type: 'historical' },
  { date: 'Jun 05', price: 2510, type: 'historical' },
  { date: 'Jun 07', price: 2550, type: 'historical' },
  { date: 'Jun 09', price: 2600, type: 'forecast' },
  { date: 'Jun 11', price: 2680, type: 'forecast' },
  { date: 'Jun 13', price: 2750, type: 'forecast' },
  { date: 'Jun 15', price: 2820, type: 'forecast' },
];

const markets = [
  { name: 'Azadpur (Current)', location: 'Local • 2km away', price: 2450, transport: 0, profit: 2450, status: 'current' },
  { name: 'Sahibabad Mandi', location: 'District • 14km away', price: 2610, transport: 85, profit: 2525, status: 'good' },
  { name: 'Ghazipur Mandi', location: 'Central • 22km away', price: 2840, transport: 140, profit: 2700, status: 'best' },
];

export default function MarketIntelligence() {
  return (
    <div className="p-10 max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-end gap-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary bg-secondary-container px-3 py-1 rounded-full mb-3 inline-block">
            Market Intelligence
          </span>
          <h1 className="text-5xl font-bold font-serif italic text-primary leading-tight">Mandi Insights</h1>
        </motion.div>
      </header>

      {/* Bento Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* AI Harvest Insight */}
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16" />
          <div className="flex-1 z-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-2 block">AI Harvest Insight</span>
            <h2 className="text-3xl font-serif italic font-bold text-primary mb-4">
              Prices are expected to peak in <span className="text-secondary">4 days</span>.
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
              Historical data and current demand spikes in neighboring regions suggest a 12% rise for Onion (Red) by Friday. <span className="font-bold">Hold your harvest for maximum profit.</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-primary text-on-primary rounded-full font-bold text-[10px] uppercase tracking-widest hover:opacity-90 transition-all shadow-md flex items-center gap-2">
                <Bell className="w-4 h-4" />
                Set Price Alert
              </button>
              <button className="px-8 py-4 bg-surface-container-low text-primary rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-surface-container transition-all border border-outline">
                View Detail Report
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/3 h-48 bg-surface-container-low rounded-xl overflow-hidden shadow-inner shrink-0 border border-outline">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-j_NZN59N8gDCom2WNBFCH8hsC4BfI0qhVEQJ8z-LfhlVjxEpIW_Kjr2h7shzB63bUdC6yfo0rdw-EXFywGXAVFIDCm6xgjc3mS-EhOGjix89pmHRKTQoqR_yekZhlPyU5XA-MbN6t2eUdm398yupo_NX_6dp3H1qMJ0GSObOa51m9I0nDXA1yXZ5ViG7vEpFB7v_cwgMsTZ_-Sl-vJbE6K7AsPc0APOniokrCp-wf6k3wFDOSI0ljSgFLk5yBTai-1ygwuZembU" 
              alt="Fresh onions"
              className="w-full h-full object-cover mix-blend-multiply opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Market Selection */}
        <div className="bg-surface-container-low rounded-xl p-8 flex flex-col justify-between shadow-sm border border-outline">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Active Region</h3>
              <MapIcon className="w-5 h-5 text-primary fill-current" />
            </div>
            <div className="space-y-4">
              <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline">
                <label className="text-[10px] font-bold text-secondary block mb-1 uppercase tracking-widest">SELECTED MANDI</label>
                <div className="flex items-center justify-between cursor-pointer">
                  <span className="text-lg font-bold text-primary">Azadpur Mandi, Delhi</span>
                  <ChevronDown className="w-5 h-5 text-outline" />
                </div>
              </div>
              <div className="bg-surface-container-lowest h-32 rounded-xl overflow-hidden relative group cursor-pointer border border-outline">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe3e2yvZfl7238Tapjuoi5BEDy8Xi9zOg7-LApuk4TtX3y2RT1umhZHXCKHOf6ZE2fP2E0kNOB6dxbA--CelkZxsY2QeviZoS-J97Z85bnBouYozlporNgkzCvtnLQSxnXReD5ZsbOPSQW0uTihMU8Ddn5G0hkE9MpBk5pNw78Apjuk2tek4ycjjXarExxeKWelC2aPICaEyafpR-_iV6_yGcAZGq12wnMw0-fVFk4iXoAiWylQHkFAFovUa-S0zsrJxJXDu9WwXI" 
                  alt="Map"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary text-white text-[10px] px-3 py-1 rounded-full font-bold shadow-lg uppercase tracking-widest">VIEW MAP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Price Trend Chart */}
        <div className="lg:col-span-3 space-y-8">
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h3 className="font-serif italic text-2xl font-bold text-primary">Price Forecasting</h3>
                <p className="text-xs text-on-surface-variant uppercase tracking-widest">Wheat (Sharbati) • Next 15 Days Prediction</p>
              </div>
              <div className="flex gap-2">
                {['15D', '1M', '3M'].map((t) => (
                  <button 
                    key={t}
                    className={cn(
                      "px-4 py-1 rounded-full text-[10px] font-bold transition-all uppercase tracking-widest",
                      t === '15D' ? "bg-primary text-white shadow-sm" : "text-on-surface-variant hover:bg-surface-container-low"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={priceData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#bfcaba" opacity={0.3} />
                  <XAxis 
                    dataKey="date" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fill: '#5A5A40', fontWeight: 600 }} 
                    dy={10}
                  />
                  <YAxis hide />
                  <Tooltip 
                    cursor={{ fill: 'transparent' }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-primary text-white p-2 rounded-lg text-[10px] font-bold shadow-xl uppercase tracking-widest">
                            ₹{payload[0].value}
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="price" radius={[4, 4, 0, 0]}>
                    {priceData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.type === 'forecast' ? '#d4a373' : '#5A5A40'} 
                        fillOpacity={entry.type === 'forecast' ? 0.6 : 0.8}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-8 flex gap-6 pt-6 border-t border-outline">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-primary rounded-sm" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Historical Trend</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-secondary rounded-sm" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">AI Forecast</span>
              </div>
            </div>
          </div>

          {/* Profit Comparison Table */}
          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline overflow-hidden">
            <div className="px-8 py-6 border-b border-outline">
              <h3 className="font-serif italic text-xl font-bold text-primary">Profit Comparison Tool</h3>
              <p className="text-[10px] text-on-surface-variant mt-1 uppercase tracking-widest">Real-time gap analysis across nearby markets</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-surface-container-low text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">
                  <tr>
                    <th className="px-8 py-4">Nearby Market</th>
                    <th className="px-8 py-4">Price / Quintal</th>
                    <th className="px-8 py-4">Transport Cost</th>
                    <th className="px-8 py-4 text-right">Net Potential Profit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline">
                  {markets.map((m) => (
                    <tr key={m.name} className="hover:bg-surface-container-low transition-colors group">
                      <td className="px-8 py-6">
                        <div className="font-bold text-primary italic font-serif">{m.name}</div>
                        <div className="text-[10px] text-on-surface-variant uppercase tracking-widest">{m.location}</div>
                      </td>
                      <td className="px-8 py-6 font-bold text-primary">₹{m.price.toLocaleString()}</td>
                      <td className="px-8 py-6 text-on-surface-variant text-sm">₹{m.transport}</td>
                      <td className="px-8 py-6 text-right">
                        <div className={cn(
                          "font-bold text-lg font-serif italic",
                          m.status === 'best' ? "text-secondary" : "text-primary"
                        )}>
                          ₹{m.profit.toLocaleString()}
                        </div>
                        {m.status === 'best' && (
                          <div className="text-[10px] text-secondary font-bold uppercase tracking-widest">+ ₹250 Surplus</div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-2 space-y-8">
          {/* Market Sentiment */}
          <div className="bg-primary text-on-primary rounded-xl p-8 relative overflow-hidden shadow-md">
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
            <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-6">Market Sentiment</h4>
            <div className="flex items-center gap-4 mb-8">
              <TrendingUp className="w-10 h-10 text-secondary" />
              <div>
                <div className="text-3xl font-bold font-serif italic">Bullish</div>
                <div className="text-sm opacity-80">Demand exceeds supply by 18%</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                <span>Buyer Interest</span>
                <span>High</span>
              </div>
              <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  transition={{ duration: 1.5 }}
                  className="bg-secondary w-[85%] h-full" 
                />
              </div>
            </div>
          </div>

          {/* Performance Bento */}
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-surface-container-low p-2 rounded-xl text-primary border border-outline">
                  <Sprout className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-bold text-secondary flex items-center gap-1 uppercase tracking-widest">
                  <ArrowUpRight className="w-3 h-3" />
                  +4.2%
                </span>
              </div>
              <h5 className="font-bold text-primary uppercase tracking-widest text-xs">Wheat Quality</h5>
              <p className="text-xs text-on-surface-variant">Grade A++ Arrival in Mandi</p>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-surface-container-low p-2 rounded-xl text-primary border border-outline">
                  <Droplets className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-bold text-error flex items-center gap-1 uppercase tracking-widest">
                  <ArrowDownRight className="w-3 h-3" />
                  -12%
                </span>
              </div>
              <h5 className="font-bold text-primary uppercase tracking-widest text-xs">Harvest Moisture</h5>
              <p className="text-xs text-on-surface-variant">Optimal for long storage</p>
            </div>
          </div>

          {/* Alerts & News */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline">
            <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4">Alerts & News</h4>
            <div className="space-y-6">
              {[
                { title: 'Import duty reduction on Pulses', time: '2 hours ago', impact: 'High', color: 'bg-secondary' },
                { title: 'Fuel prices increased by ₹1.2/L', time: '5 hours ago', impact: 'Transport Cost', color: 'bg-outline' },
              ].map((news, i) => (
                <div key={i} className="flex gap-4">
                  <div className={cn("w-1.5 h-12 rounded-full", news.color)} />
                  <div>
                    <p className="text-sm font-bold text-primary">{news.title}</p>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">{news.time} • Impact: {news.impact}</p>
                  </div>
                </div>
              ))}
              <button className="w-full py-3 border border-outline text-primary text-[10px] font-bold rounded-full hover:bg-surface-container-low transition-all uppercase tracking-widest mt-4">
                View All News
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
