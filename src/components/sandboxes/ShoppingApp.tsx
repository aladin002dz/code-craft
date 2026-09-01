import React, { useState } from 'react';
import { ShoppingBag, Plus, Minus, Trash2, Tag, Sparkles } from 'lucide-react';
import { RenderFlashingBox } from '../common/RenderFlashingBox';
import { CodeBlock } from '../common/CodeBlock';
import { Badge } from '../common/Badge';
import { useProgress } from '../../context/ProgressContext';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  icon: string;
}

export const ShoppingApp: React.FC = () => {
  const { playTone } = useProgress();

  const [cart, setCart] = useState<CartItem[]>([
    { id: '1', name: 'Mechanical Keyboard (RGB)', price: 129, quantity: 1, icon: '⌨️' },
    { id: '2', name: 'Ergonomic Vertical Mouse', price: 79, quantity: 2, icon: '🖱️' },
    { id: '3', name: '4K UltraWide Monitor', price: 499, quantity: 1, icon: '🖥️' },
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  // DERIVED STATE: No need for separate total/tax state!
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const tax = (subtotal - discountAmount) * 0.08;
  const grandTotal = subtotal - discountAmount + tax;
  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const updateQuantity = (id: string, delta: number) => {
    playTone('step');
    setCart(prev => 
      prev
        .map(item => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const removeItem = (id: string) => {
    playTone('click');
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === 'REACT20') {
      playTone('success');
      setDiscountPercent(20);
    } else {
      playTone('error');
      alert('Try coupon code: REACT20');
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* Interactive Cart Widget */}
      <div className="lg:col-span-7 space-y-4">
        <RenderFlashingBox label="ShoppingCartComponent" flashColor="cyan" className="bg-slate-950">
          <div className="space-y-4">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-cyan-400" />
                <h3 className="font-bold text-white text-base">Your Cart Items</h3>
              </div>
              <Badge variant="cyan">{totalItemCount} items</Badge>
            </div>

            {/* Cart Items List */}
            <div className="space-y-3">
              {cart.length === 0 ? (
                <div className="py-8 text-center text-slate-500 text-sm">
                  Cart is empty. Refresh to reset items.
                </div>
              ) : (
                cart.map(item => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl p-2 rounded-lg bg-slate-950">{item.icon}</span>
                      <div>
                        <div className="font-semibold text-white text-sm">{item.name}</div>
                        <div className="text-xs text-slate-400 font-mono">${item.price} each</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Quantity buttons */}
                      <div className="flex items-center border border-slate-700 rounded-lg bg-slate-950 overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2 py-1 hover:bg-slate-800 text-slate-300 transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 py-1 text-xs font-mono font-bold text-cyan-300">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2 py-1 hover:bg-slate-800 text-slate-300 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="w-16 text-right font-mono font-bold text-sm text-slate-200">
                        ${item.price * item.quantity}
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1.5 text-slate-500 hover:text-rose-400 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Coupon Code Input */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2 pt-2 border-t border-slate-800">
              <input
                type="text"
                placeholder="Promo Code (Try REACT20)"
                value={couponCode}
                onChange={e => setCouponCode(e.target.value)}
                className="flex-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
              />
              <button
                type="submit"
                className="px-4 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-colors flex items-center gap-1"
              >
                <Tag className="w-3 h-3" />
                <span>Apply</span>
              </button>
            </form>

            {/* Price Calculations */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs font-mono">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>Discount ({discountPercent}%):</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-400">
                <span>Estimated Tax (8%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-cyan-300 pt-2 border-t border-slate-800">
                <span>Grand Total:</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>

          </div>
        </RenderFlashingBox>
      </div>

      {/* Derived State Principle Explanation */}
      <div className="lg:col-span-5 space-y-4">
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Key Lesson: Avoid Redundant State</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Notice that we did <strong>NOT</strong> create <code className="text-rose-300 font-mono">const [total, setTotal] = useState(0)</code>.
            If a value can be computed from existing state or props during render, compute it directly on the fly!
          </p>

          <CodeBlock
            filename="DerivedStateExample.jsx"
            code={`// ✅ Correct: Derived on the fly during render
const [cart, setCart] = useState([...]);
const [discount, setDiscount] = useState(0);

// Computed automatically on every render:
const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
const grandTotal = subtotal * (1 - discount / 100);`}
          />
        </div>
      </div>

    </div>
  );
};
