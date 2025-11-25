import { motion } from 'framer-motion';
import dish1 from '../assets/dish1.png';
import dish2 from '../assets/dish2.png';
import dish3 from '../assets/dish3.png';

const dishes = [
    {
        id: 1,
        image: dish1,
        title: "Signature Ribeye",
        price: "$45",
        description: "Dry-aged for 28 days, served with truffle mashed potatoes."
    },
    {
        id: 2,
        image: dish2,
        title: "Seafood Linguine",
        price: "$32",
        description: "Fresh catch of the day tossed in a white wine garlic sauce."
    },
    {
        id: 3,
        image: dish3,
        title: "Golden Chocolate Dome",
        price: "$18",
        description: "Rich dark chocolate mousse with a molten gold center."
    }
];

const Gallery = () => {
    return (
        <section id="gallery" className="section" style={{ backgroundColor: '#f4f4f4' }}>
            <div className="container">
                <div className="text-center mb-lg">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ fontSize: '2.5rem', marginBottom: '1rem' }}
                    >
                        Featured Delicacies
                    </motion.h2>
                    <p style={{ color: '#666' }}>Culinary masterpieces crafted for your delight.</p>
                </div>

                <div className="grid grid-3" style={{ gap: '2rem' }}>
                    {dishes.map((dish, index) => (
                        <motion.div
                            key={dish.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            style={{
                                backgroundColor: '#fff',
                                borderRadius: 'var(--border-radius)',
                                overflow: 'hidden',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                            }}
                        >
                            <div style={{ height: '250px', overflow: 'hidden' }}>
                                <img
                                    src={dish.image}
                                    alt={dish.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)' }}>{dish.title}</h3>
                                    <span style={{ color: 'var(--color-accent)', fontWeight: 'bold', fontSize: '1.1rem' }}>{dish.price}</span>
                                </div>
                                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{dish.description}</p>
                                <button className="btn btn-outline" style={{ width: '100%', borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}>
                                    Order Now
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
