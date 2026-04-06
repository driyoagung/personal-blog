import React from 'react';

export default function StarsBackground() {
    return (
        <div className="absolute inset-0 w-full h-[800px] overflow-hidden pointer-events-none z-0">
            <style>{`
                .stars-container {
                    position: absolute;
                    inset: -100px;
                    transform: rotate(-45deg);
                }
                .shooting-star {
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: #fff;
                    border-radius: 50%;
                    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1), 0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 1);
                    animation: animate-star 3s linear infinite;
                    opacity: 0;
                }
                .shooting-star::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 250px;
                    height: 1px;
                    background: linear-gradient(90deg, #fff, transparent);
                }
                @keyframes animate-star {
                    0% {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    80% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateX(-1500px);
                        opacity: 0;
                    }
                }
                .star-1 { top: 10%; right: -200px; animation-delay: 0s; animation-duration: 2.5s; }
                .star-2 { top: 25%; right: -200px; animation-delay: 0.8s; animation-duration: 3s; }
                .star-3 { top: 40%; right: -200px; animation-delay: 1.5s; animation-duration: 2s; }
                .star-4 { top: 55%; right: -200px; animation-delay: 0.4s; animation-duration: 2.8s; }
                .star-5 { top: 70%; right: -200px; animation-delay: 2.1s; animation-duration: 2.2s; }
                .star-6 { top: 85%; right: -200px; animation-delay: 1.1s; animation-duration: 3.5s; }
            `}</style>

            <div className="stars-container">
                <div className="shooting-star star-1"></div>
                <div className="shooting-star star-2"></div>
                <div className="shooting-star star-3"></div>
                <div className="shooting-star star-4"></div>
                <div className="shooting-star star-5"></div>
                <div className="shooting-star star-6"></div>
            </div>
            
            {/* Subtle starry static dots overlay for depth */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/10 via-transparent to-transparent z-[-1]"></div>
        </div>
    );
}
