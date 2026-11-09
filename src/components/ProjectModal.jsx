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
  BookMarked,
  Tag
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // Interactive playground state inside GitHub modal
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#1f2328]/60 backdrop-blur-xs animate-in fade-in duration-150">
      
      {/* GitHub Dialog Container */}
      <div 
        className="relative w-full max-w-3xl bg-[#ffffff] border border-[#d0d7de] rounded-lg shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="gh-box-header flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#1f2328]">
            <BookMarked className="w-4 h-4 text-[#656d76]" />
            <span>ujjwal-notpro060406 / {project.slug || project.title.toLowerCase().replace(/ /g, '-')}</span>
            <span className="text-[11px] font-normal text-[#656d76] border border-[#d0d7de] rounded-full px-2 py-0.2 bg-[#ffffff]">
              Public
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-[#656d76] hover:text-[#1f2328] hover:bg-[#eaeef2] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto text-sm text-[#1f2328]">
          
          {/* Title & Tagline */}
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1f2328]">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#656d76] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Topics */}
          <div className="space-y-1.5">
            <div className="text-xs font-semibold text-[#656d76]">Repository Topics:</div>
            <div className="flex flex-wrap gap-1.5">
              {(project.topics || project.techStack).map((t) => (
                <span key={t} className="gh-topic">
                  {t.toLowerCase().replace(/[^a-z0-9]/g, '-')}
                </span>
              ))}
            </div>
          </div>

          {/* Status Note */}
          <div className="p-3 bg-[#f6f8fa] border border-[#d0d7de] rounded-md text-xs text-[#656d76] flex items-start space-x-2">
            <AlertCircle className="w-4 h-4 text-[#0969da] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#1f2328] block">Project Status & Verification:</strong>
              <p>{project.statusNote}</p>
            </div>
          </div>

          {/* Features */}
          {project.features && (
            <div className="space-y-2">
              <div className="text-xs font-semibold text-[#656d76]">Key Deliverables & Specifications:</div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start space-x-2 p-2 bg-[#f6f8fa] border border-[#d0d7de] rounded">
                    <CheckCircle className="w-3.5 h-3.5 text-[#1a7f37] flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Interactive Live Playground */}
          {project.title === 'Weather App' && (
            <div className="p-4 bg-[#f6f8fa] border border-[#d0d7de] rounded-md space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#1f2328] flex items-center space-x-1.5">
                  <CloudSun className="w-4 h-4 text-[#0969da]" />
                  <span>OpenWeatherMap API Live Simulator</span>
                </span>
                <span className="text-[10px] font-mono font-medium text-[#1a7f37] bg-[#dafbe1] px-2 py-0.5 rounded border border-[#2da44e]/30">
                  API Connected
                </span>
              </div>
              <form onSubmit={handleCitySearch} className="flex gap-2">
                <input
                  type="text"
                  value={demoState.cityQuery}
                  onChange={(e) => setDemoState({ ...demoState, cityQuery: e.target.value })}
                  placeholder="Enter city (e.g. Prayagraj, Noida)..."
                  className="flex-1 px-3 py-1.5 bg-[#ffffff] text-xs text-[#1f2328] rounded border border-[#d0d7de] outline-none focus:border-[#0969da]"
                />
                <button type="submit" className="gh-btn text-xs py-1.5 px-3">
                  Query
                </button>
              </form>
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                <div className="p-2 bg-[#ffffff] rounded border border-[#d0d7de]">
                  <div className="text-[10px] text-[#656d76]">City</div>
                  <div className="font-bold">{demoState.cityQuery}</div>
                </div>
                <div className="p-2 bg-[#ffffff] rounded border border-[#d0d7de]">
                  <div className="text-[10px] text-[#656d76]">Temp</div>
                  <div className="font-bold text-[#0969da]">{demoState.weatherResult.temp}°C</div>
                </div>
                <div className="p-2 bg-[#ffffff] rounded border border-[#d0d7de]">
                  <div className="text-[10px] text-[#656d76]">Condition</div>
                  <div className="font-bold">{demoState.weatherResult.condition}</div>
                </div>
                <div className="p-2 bg-[#ffffff] rounded border border-[#d0d7de]">
                  <div className="text-[10px] text-[#656d76]">Humidity</div>
                  <div className="font-bold">{demoState.weatherResult.humidity}%</div>
                </div>
              </div>
            </div>
          )}

          {project.title === 'To-Do List' && (
            <div className="p-4 bg-[#f6f8fa] border border-[#d0d7de] rounded-md space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#1f2328]">Interactive Task Simulator</span>
                <span className="text-[11px] font-mono text-[#656d76]">
                  {demoState.todos.filter(t => t.done).length}/{demoState.todos.length} Done
                </span>
              </div>
              <form onSubmit={handleAddTodo} className="flex gap-2">
                <input
                  type="text"
                  value={demoState.newTodo}
                  onChange={(e) => setDemoState({ ...demoState, newTodo: e.target.value })}
                  placeholder="Add a new task item..."
                  className="flex-1 px-3 py-1.5 bg-[#ffffff] text-xs text-[#1f2328] rounded border border-[#d0d7de] outline-none focus:border-[#0969da]"
                />
                <button type="submit" className="gh-btn text-xs py-1.5 px-3">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              </form>
              <div className="space-y-1.5 max-h-36 overflow-y-auto">
                {demoState.todos.map(todo => (
                  <div key={todo.id} className="flex items-center justify-between p-2 rounded bg-[#ffffff] border border-[#d0d7de] text-xs">
                    <button onClick={() => toggleTodo(todo.id)} className="flex items-center space-x-2 text-left">
                      <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${todo.done ? 'bg-[#1f883d] border-[#1f883d]' : 'border-[#d0d7de]'}`}>
                        {todo.done && <Check className="w-2.5 h-2.5 text-white" />}
                      </div>
                      <span className={todo.done ? 'line-through text-[#656d76]' : 'text-[#1f2328]'}>
                        {todo.text}
                      </span>
                    </button>
                    <button onClick={() => deleteTodo(todo.id)} className="text-[#656d76] hover:text-[#cf222e] p-1">
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-3 border-t border-[#d0d7de] flex items-center justify-between">
            <a
              href="https://github.com/ujjwal-notpro060406"
              target="_blank"
              rel="noopener noreferrer"
              className="gh-btn"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View On GitHub</span>
            </a>
            <button onClick={onClose} className="gh-btn">
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
