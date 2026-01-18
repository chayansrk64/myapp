const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://next-assignment-zeta.vercel.app', 'https://next-assignment-l6a073dpk-chayansrk64gmailcoms-projects.vercel.app'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Mock database - items storage
let items = [
  {
    id: 1,
    name: 'Laptop',
    description: 'High-performance laptop for professionals',
    longDescription: 'This premium laptop is equipped with the latest processors and high-resolution display, perfect for professional work, gaming, and content creation.',
    price: 999.99,
    image: 'https://png.pngtree.com/png-vector/20250522/ourmid/pngtree-modern-laptop-computer-with-screen-open-technology-digital-device-png-image_16345445.png',
    category: 'electronics',
    stock: 5,
    specs: {
      processor: 'Intel Core i7',
      ram: '16GB',
      storage: '512GB SSD',
      display: '15.6 inch 4K',
    },
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse with long battery life',
    longDescription: 'Comfortable ergonomic design reduces wrist strain. Features advanced optical tracking and can connect to up to 3 devices simultaneously.',
    price: 29.99,
    image: 'https://t3.ftcdn.net/jpg/06/11/67/78/360_F_611677850_HguXRoZYQWu7ekpl1MWxMTiSY4kKTmPT.jpg',
    category: 'electronics',
    stock: 15,
    specs: {
      type: 'Optical',
      connectivity: 'Wireless 2.4GHz',
      battery: '18 months',
      dpi: 'Adjustable 800-3200',
    },
  },
  {
    id: 3,
    name: 'USB-C Cable',
    description: 'Durable fast-charging USB-C cable',
    longDescription: 'High-quality USB-C cable supports fast charging and data transfer. Compatible with most modern devices.',
    price: 14.99,
    image: 'https://static.vecteezy.com/system/resources/thumbnails/072/443/075/small/high-quality-durable-usb-to-usb-c-charging-cable-for-all-your-devices-photo.jpg',
    category: 'accessories',
    stock: 50,
    specs: {
      length: '6 feet',
      speed: 'USB 3.0',
      charging: '60W',
    },
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    description: 'RGB mechanical keyboard with custom switches',
    longDescription: 'Professional-grade mechanical keyboard with customizable RGB backlighting. Features custom mechanical switches for optimal typing experience.',
    price: 159.99,
    image: 'https://images.indianexpress.com/2021/06/Corsair-Mechanical-Keyboard.jpg',
    category: 'electronics',
    stock: 8,
    specs: {
      switches: 'Custom Cherry MX',
      layout: 'Full Size',
      lighting: 'RGB Backlighting',
      connection: 'Wired USB',
    },
  },
  {
    id: 5,
    name: 'Monitor Stand',
    description: 'Adjustable monitor stand for better ergonomics',
    longDescription: 'Heavy-duty monitor stand with height and angle adjustment. Improves posture and viewing angle.',
    price: 49.99,
    image: 'https://image.springbeetle.com/cdn-cgi/image/dpr=1,format=webp/https://staticprod.site.flexispot.com/dev/trantor/attachments/800_F7.jpg',
    category: 'accessories',
    stock: 12,
    specs: {
      weight_capacity: '25kg',
      adjustable_height: '0-10 inches',
      materials: 'Aluminum',
    },
  },
  {
    id: 6,
    name: 'Webcam',
    description: '4K webcam for streaming and video calls',
    longDescription: 'Professional 4K webcam with wide-angle lens and built-in microphone. Perfect for content creators and remote professionals.',
    price: 79.99,
    image: 'https://media.istockphoto.com/id/674322530/photo/webcam-3d-rendering-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=FuIl2RKv385PSVynrDEgonl9ZCNj5Llibs77uYk9KPI=',
    category: 'electronics',
    stock: 7,
    specs: {
      resolution: '4K 2160p',
      fps: '30fps',
      field_of_view: '90 degrees',
      microphone: 'Built-in',
    },
  },
];

let nextId = 7;

// Routes

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

// GET all items
app.get('/api/items', (req, res) => {
  try {
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

// GET single item by ID
app.get('/api/items/:id', (req, res) => {
  try {
    const item = items.find((i) => i.id === parseInt(req.params.id));

    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch item' });
  }
});

// POST create new item
app.post('/api/items', (req, res) => {
  try {
    const { name, description, longDescription, price, category, stock, image } = req.body;

    // Validation
    if (!name || !description || price === undefined || stock === undefined) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newItem = {
      id: nextId++,
      name,
      description,
      longDescription: longDescription || '',
      price: parseFloat(price),
      category: category || 'other',
      stock: parseInt(stock),
      image: image || 'https://via.placeholder.com/300x200?text=Product',
      specs: {},
    };

    items.push(newItem);
    res.status(201).json(newItem);
  } catch (error) {
    console.error('Error creating item:', error);
    res.status(500).json({ error: 'Failed to create item' });
  }
});

// PUT update item
app.put('/api/items/:id', (req, res) => {
  try {
    const item = items.find((i) => i.id === parseInt(req.params.id));

    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    const { name, description, longDescription, price, category, stock, image } = req.body;

    if (name) item.name = name;
    if (description) item.description = description;
    if (longDescription) item.longDescription = longDescription;
    if (price !== undefined) item.price = parseFloat(price);
    if (category) item.category = category;
    if (stock !== undefined) item.stock = parseInt(stock);
    if (image) item.image = image;

    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update item' });
  }
});

// DELETE item
app.delete('/api/items/:id', (req, res) => {
  try {
    const itemIndex = items.findIndex((i) => i.id === parseInt(req.params.id));

    if (itemIndex === -1) {
      return res.status(404).json({ error: 'Item not found' });
    }

    const deletedItem = items.splice(itemIndex, 1);
    res.json({ message: 'Item deleted successfully', item: deletedItem[0] });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete item' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✓ API Server running on http://localhost:${PORT}`);
  console.log(`✓ Health check: http://localhost:${PORT}/health`);
  console.log(`✓ Items endpoint: http://localhost:${PORT}/api/items`);
});
