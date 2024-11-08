"use client"
import { useEffect } from "react"
import "./styles.css"

const CustomCursor = () => {
    useEffect(() => {
        const cursor = {
            delay: 8,
            _x: 0,
            _y: 0,
            endX: (window.innerWidth / 2),
            endY: (window.innerHeight / 2),
            cursorVisible: true,
            cursorEnlarged: false,
            $dot: document.querySelector('.cursor-dot')! as HTMLElement,
            $outline: document.querySelector('.cursor-dot-outline')! as HTMLElement,
            dotSize: 0,
            outlineSize: 0,

            init: function () {
                // Set up element sizes
                this.dotSize = this.$dot.offsetWidth;
                this.outlineSize = this.$outline.offsetWidth;
                // check if touch device, if so dont init
                if (window.matchMedia('(pointer: coarse)').matches) return;

                this.setupEventListeners();
                this.animateDotOutline();
            },

            setupEventListeners: function () {

                // Anchor hovering
                document.querySelectorAll('a').forEach(el => {
                    el.addEventListener('mouseover', () => {
                        this.cursorEnlarged = true;
                        this.toggleCursorSize();
                    });
                    el.addEventListener('mouseout', () => {
                        this.cursorEnlarged = false;
                        this.toggleCursorSize();
                    });
                });

                // Click events
                document.addEventListener('mousedown', () => {
                    this.cursorEnlarged = true;
                    this.toggleCursorSize();
                });
                document.addEventListener('mouseup', () => {
                    this.cursorEnlarged = false;
                    this.toggleCursorSize();
                });


                document.addEventListener('mousemove', (e) => {
                    // Show the cursor
                    this.cursorVisible = true;
                    this.toggleCursorVisibility();

                    // Position the dot
                    this.endX = e.pageX;
                    this.endY = e.pageY;
                    this.$dot.style.top = this.endY + 'px';
                    this.$dot.style.left = this.endX + 'px';
                });

                // Hide/show cursor
                document.addEventListener('mouseenter', () => {
                    this.cursorVisible = true;
                    this.toggleCursorVisibility();
                    this.$dot.style.opacity = "1";
                    this.$outline.style.opacity = "1";
                });

                document.addEventListener('mouseleave', () => {
                    this.cursorVisible = true;
                    this.toggleCursorVisibility();
                    this.$dot.style.opacity = "0";
                    this.$outline.style.opacity = "0";
                });
            },

            animateDotOutline: function () {

                this._x += (this.endX - this._x) / this.delay;
                this._y += (this.endY - this._y) / this.delay;
                this.$outline.style.top = this._y + 'px';
                this.$outline.style.left = this._x + 'px';

                requestAnimationFrame(this.animateDotOutline.bind(this));
            },

            toggleCursorSize: function () {

                if (this.cursorEnlarged) {
                    this.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
                    this.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                } else {
                    this.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
                    this.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
                }
            },

            toggleCursorVisibility: function () {

                if (this.cursorVisible) {
                    this.$dot.style.opacity = "1";
                    this.$outline.style.opacity = "1";
                } else {
                    this.$dot.style.opacity = "0";
                    this.$outline.style.opacity = "0";
                }
            }
        }

        cursor.init();
    }, []);

    return <>
        <div className="cursor-dot-outline"></div>
        <div className="cursor-dot"></div>
    </>
}

export default CustomCursor