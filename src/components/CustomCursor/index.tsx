"use client"
import { useEffect } from "react"
import "./styles.css"

const CustomCursor = () => {
    useEffect(() => {
        let isActivated = false;
        let animationFrameId: number;

        const cursor = {
            delay: 8,
            _x: window.innerWidth / 2,
            _y: window.innerHeight / 2,
            endX: window.innerWidth / 2,
            endY: window.innerHeight / 2,
            cursorVisible: false,
            cursorEnlarged: false,
            $dot: document.querySelector('.cursor-dot') as HTMLElement | null,
            $outline: document.querySelector('.cursor-dot-outline') as HTMLElement | null,

            init: function () {
                if (!this.$dot || !this.$outline) return;

                const onPointerMove = (e: PointerEvent) => {
                    // Ignore pure touch events on touch laptops so touch taps aren't intercepted
                    if (e.pointerType === 'touch') {
                        this.cursorVisible = false;
                        this.toggleCursorVisibility();
                        document.documentElement.classList.remove('has-custom-cursor');
                        return;
                    }

                    // Enable custom cursor mode on mouse/pen movement
                    if (!isActivated) {
                        isActivated = true;
                        document.documentElement.classList.add('has-custom-cursor');
                        this.animateDotOutline();
                    }

                    this.cursorVisible = true;
                    this.toggleCursorVisibility();

                    this.endX = e.pageX;
                    this.endY = e.pageY;
                    if (this.$dot) {
                        this.$dot.style.top = this.endY + 'px';
                        this.$dot.style.left = this.endX + 'px';
                    }
                };

                const onTouchStart = () => {
                    // If user touches the screen, hide custom cursor and restore native touch behavior
                    this.cursorVisible = false;
                    this.toggleCursorVisibility();
                    document.documentElement.classList.remove('has-custom-cursor');
                };

                const onMouseDown = () => {
                    this.cursorEnlarged = true;
                    this.toggleCursorSize();
                };

                const onMouseUp = () => {
                    this.cursorEnlarged = false;
                    this.toggleCursorSize();
                };

                const onMouseLeave = () => {
                    this.cursorVisible = false;
                    this.toggleCursorVisibility();
                };

                const onMouseEnter = () => {
                    if (isActivated) {
                        this.cursorVisible = true;
                        this.toggleCursorVisibility();
                    }
                };

                // Add interactive hover listeners for links and buttons
                const onMouseOver = (e: MouseEvent) => {
                    const target = e.target as HTMLElement | null;
                    if (target?.closest('a, button, [role="button"], input, select, textarea')) {
                        this.cursorEnlarged = true;
                        this.toggleCursorSize();
                    }
                };

                const onMouseOut = (e: MouseEvent) => {
                    const target = e.target as HTMLElement | null;
                    if (target?.closest('a, button, [role="button"], input, select, textarea')) {
                        this.cursorEnlarged = false;
                        this.toggleCursorSize();
                    }
                };

                window.addEventListener('pointermove', onPointerMove, { passive: true });
                window.addEventListener('touchstart', onTouchStart, { passive: true });
                document.addEventListener('mousedown', onMouseDown);
                document.addEventListener('mouseup', onMouseUp);
                document.addEventListener('mouseover', onMouseOver);
                document.addEventListener('mouseout', onMouseOut);
                document.addEventListener('mouseleave', onMouseLeave);
                document.addEventListener('mouseenter', onMouseEnter);

                return () => {
                    window.removeEventListener('pointermove', onPointerMove);
                    window.removeEventListener('touchstart', onTouchStart);
                    document.removeEventListener('mousedown', onMouseDown);
                    document.removeEventListener('mouseup', onMouseUp);
                    document.removeEventListener('mouseover', onMouseOver);
                    document.removeEventListener('mouseout', onMouseOut);
                    document.removeEventListener('mouseleave', onMouseLeave);
                    document.removeEventListener('mouseenter', onMouseEnter);
                    if (animationFrameId) cancelAnimationFrame(animationFrameId);
                    document.documentElement.classList.remove('has-custom-cursor');
                };
            },

            animateDotOutline: function () {
                this._x += (this.endX - this._x) / this.delay;
                this._y += (this.endY - this._y) / this.delay;
                if (this.$outline) {
                    this.$outline.style.top = this._y + 'px';
                    this.$outline.style.left = this._x + 'px';
                }

                animationFrameId = requestAnimationFrame(this.animateDotOutline.bind(this));
            },

            toggleCursorSize: function () {
                if (!this.$dot || !this.$outline) return;
                if (this.cursorEnlarged) {
                    this.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
                    this.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                } else {
                    this.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
                    this.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
                }
            },

            toggleCursorVisibility: function () {
                if (!this.$dot || !this.$outline) return;
                const opacity = this.cursorVisible ? '1' : '0';
                this.$dot.style.opacity = opacity;
                this.$outline.style.opacity = opacity;
            }
        };

        const cleanup = cursor.init();
        return () => {
            if (cleanup) cleanup();
        };
    }, []);

    return (
        <>
            <div className="cursor-dot-outline" aria-hidden="true"></div>
            <div className="cursor-dot" aria-hidden="true"></div>
        </>
    );
};

export default CustomCursor;