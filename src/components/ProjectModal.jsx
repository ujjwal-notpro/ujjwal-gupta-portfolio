import React, { useState } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle, 
  AlertCircle, 
  Code, 
  Layers, 
  Search, 
  CloudSun, 
  ShoppingCart, 
  Plus, 
  Trash2, 
  Check, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // Interactive playground state inside modal
  const [demoState, setDemoState] = useState({
    cityQuery: 'Prayagraj',
    weatherResult: { temp: 28, condition: 'Clear Sky', humidity: 55, wind: 12 },
    todos: [
      { id: 1, text: 'Review Data Structures and Algorithms', done: true },
      { id: 2, text: 'Complete React component refactoring', done: false },
      { id: 3, text: 'Test OpenWeatherMap API response endpoints', done: true }
    ],
    newTodo: ''
  });

  const handleCitySearch = (e) => {
    e.preventDefault();
    const city = demoState.cityQuery.trim();
    if (!city) return;
    setDemoState(prev => ({
      ...prev,
      weatherResult: {
        temp: Math.floor(Math.random() * 15) + 20,
        condition: ['Sunny', 'Partly Cloudy', 'Clear Sky', 'Breezy'][Math.floor(Math.random() * 4)],
        humidity: Math.floor(Math.random() * 30) + 40,
        wind: Math.floor(Math.random() * 15) + 5
      }
    }));
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!demoState.newTodo.trim()) return;
    setDemoState(prev => ({
      ...prev,
      todos: [...prev.todos, { id: Date.now(), text: prev.newTodo.trim(), done: false }],
      newTodo: ''
    }));
  };

  const toggleTodo = (id) => {
    setDemoState(prev => ({
      ...prev,
      todos: prev.todos.map(t => t.id === id ? { ...t, done: !t.done } : t)
    }));
  };

  const deleteTodo = (id) => {
    setDemoState(prev => ({
      ...prev,
      todos: prev.todos.filter(t => t.id !== id)
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Portfolio Dialog Container */}
      <div 
        className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar with Colorful Gradient Accent */}
        <div className="flex items-center justify-between px-6 py-4.5 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-b border-indigo-100">
          <div className="flex items-center space-x-2.5">
            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500" />
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto text-slate-900">
          
          {/* Title & Tagline */}
          <div className="space-y-1.5">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              {project.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Technologies Used:
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-xl text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Status Note */}
          <div className="p-4 bg-indigo-50/50 border border-indigo-100 rounded-2xl text-xs text-slate-600 flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block font-bold">Project Verification Note:</strong>
              <p>{project.statusNote}</p>
            </div>
          </div>

          {/* Features */}
          {project.features && (
            <div className="space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Features & Architecture:
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start space-x-2 p-2.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Interactive Live Playground */}
          {project.title === 'Weather App' && (
            <div className="p-5 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 border border-sky-100 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-slate-900 flex items-center space-x-1.5 uppercase tracking-wider">
                  <CloudSun className="w-4 h-4 text-sky-600" />
                  <span>OpenWeatherMap Live Preview Simulator</span>
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                  API Connected
                </span>
              </div>
              <form onSubmit={handleCitySearch} className="flex gap-2">
                <input
                  type="text"
                  value={demoState.cityQuery}
                  onChange={(e) => setDemoState({ ...demoState, cityQuery: e.target.value })}
                  placeholder="Enter city (e.g. Prayagraj, Noida)..."
                  className="flex-1 px-3.5 py-2 bg-white text-xs text-slate-900 rounded-xl border border-sky-200 outline-none focus:border-indigo-600 shadow-xs"
                />
                <button type="submit" className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xs rounded-xl shadow-xs hover:opacity-95">
                  Fetch Weather
                </button>
              </form>
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                <div className="p-2.5 bg-white rounded-xl border border-sky-100 shadow-xs">
                  <div className="text-[10px] text-slate-400 font-bold">City</div>
                  <div className="font-extrabold text-slate-900">{demoState.cityQuery}</div>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-sky-100 shadow-xs">
                  <div className="text-[10px] text-slate-400 font-bold">Temp</div>
                  <div className="font-extrabold text-indigo-600">{demoState.weatherResult.temp}°C</div>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-sky-100 shadow-xs">
                  <div className="text-[10px] text-slate-400 font-bold">Condition</div>
                  <div className="font-extrabold text-sky-600">{demoState.weatherResult.condition}</div>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-sky-100 shadow-xs">
                  <div className="text-[10px] text-slate-400 font-bold">Humidity</div>
                  <div className="font-extrabold text-slate-900">{demoState.weatherResult.humidity}%</div>
                </div>
              </div>
            </div>
          )}

          {project.title === 'To-Do List' && (
            <div className="p-5 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 border border-emerald-100 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                  Interactive Task Simulator
                </span>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                  {demoState.todos.filter(t => t.done).length}/{demoState.todos.length} Completed
                </span>
              </div>
              <form onSubmit={handleAddTodo} className="flex gap-2">
                <input
                  type="text"
                  value={demoState.newTodo}
                  onChange={(e) => setDemoState({ ...demoState, newTodo: e.target.value })}
                  placeholder="Add a new task item..."
                  className="flex-1 px-3.5 py-2 bg-white text-xs text-slate-900 rounded-xl border border-emerald-200 outline-none focus:border-indigo-600 shadow-xs"
                />
                <button type="submit" className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs rounded-xl shadow-xs flex items-center space-x-1">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              </form>
              <div className="space-y-1.5 max-h-36 overflow-y-auto">
                {demoState.todos.map(todo => (
                  <div key={todo.id} className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-emerald-100 text-xs shadow-xs">
                    <button onClick={() => toggleTodo(todo.id)} className="flex items-center space-x-2 text-left">
                      <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${todo.done ? 'bg-emerald-600 border-emerald-600' : 'border-slate-300'}`}>
                        {todo.done && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span className={todo.done ? 'line-through text-slate-400' : 'text-slate-800 font-semibold'}>
                        {todo.text}
                      </span>
                    </button>
                    <button onClick={() => deleteTodo(todo.id)} className="text-slate-400 hover:text-rose-600 p-1">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
            <a
              href="https://github.com/ujjwal-notpro060406"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View GitHub Profile</span>
            </a>

            <button 
              onClick={onClose} 
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
