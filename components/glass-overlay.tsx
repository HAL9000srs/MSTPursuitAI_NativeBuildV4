"use client"

export default function GlassOverlay() {
    return (
        <div 
            className="fixed inset-0 pointer-events-none z-[5]"
            style={{
                background: 'rgba(10, 15, 30, 0.3)',
            }}
        />
    );
}
