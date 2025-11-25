import { motion } from 'framer-motion';
import heroBg from '../assets/hero_bg.png'; // We will create this

const Hero = () => {
    return (
        <section
            id="hero"
            style={{
                height: '100vh',
                width: '100%',
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: '#fff',
                padding: '0 1rem'
            }}
        >
            <div className="hero-content" style={{ maxWidth: '800px' }}>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 5rem)',
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-heading)'
                    }}
                >
                    Gourmet Haven
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                        marginBottom: '2.5rem',
                        fontWeight: 300
                    }}
                >
                    Experience the symphony of flavors in an elegant setting.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <button className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
                        Explore Menu
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
