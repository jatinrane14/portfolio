class Particle {
    constructor(x, y, size, speed, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.color = color;
        this.direction = Math.random() * Math.PI * 2;
        this.velocity = {
            x: Math.cos(this.direction) * speed,
            y: Math.sin(this.direction) * speed
        };
    }

    update(width, height) {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        if (this.x < 0 || this.x > width) this.velocity.x *= -1;
        if (this.y < 0 || this.y > height) this.velocity.y *= -1;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

class ParticlesAnimation {
    constructor() {
        this.canvas = document.getElementById('particles-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.animationFrameId = null;

        this.resizeCanvas();
        this.createParticles();
        this.setupEventListeners();
        this.animate();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        this.particles = [];
        const numParticles = Math.floor((this.canvas.width * this.canvas.height) / 15000);
        
        for (let i = 0; i < numParticles; i++) {
            this.particles.push(
                new Particle(
                    Math.random() * this.canvas.width,
                    Math.random() * this.canvas.height,
                    Math.random() * 2 + 1,
                    Math.random() * 0.5 + 0.2,
                    `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.2})`
                )
            );
        }
    }

    drawLines(p1, p2) {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = `rgba(255, 255, 255, ${(maxDistance - distance) / maxDistance * 0.2})`;
            // this.strokeStyle = `rgba(148, 163, 184, ${(maxDistance - distance) / maxDistance * 0.2})`; 
            this.ctx.lineWidth = 1;
            this.ctx.moveTo(p1.x, p1.y);
            this.ctx.lineTo(p2.x, p2.y);
            this.ctx.stroke();
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(particle => {
            particle.update(this.canvas.width, this.canvas.height);
            particle.draw(this.ctx);

            this.particles.forEach(otherParticle => {
                if (particle !== otherParticle) {
                    this.drawLines(particle, otherParticle);
                }
            });
        });

        this.animationFrameId = requestAnimationFrame(() => this.animate());
    }

    setupEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            this.createParticles();
        });
    }

    destroy() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
        window.removeEventListener('resize', this.resizeCanvas);
    }
}

// Initialize the animation
const particlesAnimation = new ParticlesAnimation();