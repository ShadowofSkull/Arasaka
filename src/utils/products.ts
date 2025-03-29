export const products = [
  {
    id: "cpu-001",
    category: "Processors",
    name: "Intel Core i9-14900K",
    brand: "Intel",
    price: 2772.95,
    stock: 15,
    specs: {
      cores: 24,
      threads: 32,
      baseFrequency: "3.2 GHz",
      boostFrequency: "6.0 GHz",
      cache: "36MB",
      tdp: 125,
      socket: "LGA1700"
    },
    features: [
      "Hybrid architecture with 8 P-cores and 16 E-cores",
      "PCIe 5.0 support",
      "DDR5 memory support",
      "Unlocked multiplier for overclocking"
    ],
    imageUrl: "/images/intel-i9-14900k.png",
    description: "Intel's flagship desktop processor delivering top-tier performance for gaming and content creation."
  },
  {
    id: "cpu-002",
    category: "Processors",
    name: "AMD Ryzen 9 7950X3D",
    brand: "AMD",
    price: 3054.95,
    stock: 10,
    specs: {
      cores: 16,
      threads: 32,
      baseFrequency: "4.2 GHz",
      boostFrequency: "5.7 GHz",
      cache: "144MB (including 128MB 3D V-Cache)",
      tdp: 120,
      socket: "AM5"
    },
    features: [
      "3D V-Cache technology",
      "PCIe 5.0 support",
      "DDR5 memory support",
      "Zen 4 architecture"
    ],
    imageUrl: "/images/amd-7950x3d.png",
    description: "AMD's ultimate gaming processor with innovative 3D V-Cache technology for unprecedented gaming performance."
  },
  {
    id: "cpu-003",
    category: "Processors",
    name: "Intel Core i5-14400F",
    brand: "Intel",
    price: 799.99,
    stock: 25,
    specs: {
      cores: 10,
      threads: 16,
      baseFrequency: "2.5 GHz",
      boostFrequency: "4.7 GHz",
      cache: "20MB",
      tdp: 65,
      socket: "LGA1700"
    },
    features: [
      "No integrated graphics",
      "Hybrid architecture with P-cores and E-cores",
      "PCIe 5.0 support",
      "DDR5/DDR4 compatibility"
    ],
    imageUrl: "/images/intel-i5-14400f.png",
    description: "Excellent mid-range CPU offering great gaming performance at a budget-friendly price point."
  },
  {
    id: "cpu-004",
    category: "Processors",
    name: "AMD Ryzen 5 7600",
    brand: "AMD",
    price: 849.99,
    stock: 30,
    specs: {
      cores: 6,
      threads: 12,
      baseFrequency: "3.8 GHz",
      boostFrequency: "5.1 GHz",
      cache: "38MB",
      tdp: 65,
      socket: "AM5"
    },
    features: [
      "Integrated Radeon graphics",
      "PCIe 5.0 support",
      "DDR5 memory support",
      "Zen 4 architecture"
    ],
    imageUrl: "/images/amd-7600.png",
    description: "Balanced mid-range processor with strong single-core performance for gaming and productivity."
  },
  // New Entry-Level CPU
  {
    id: "cpu-005",
    category: "Processors",
    name: "Intel Celeron G6900",
    brand: "Intel",
    price: 249.99,
    stock: 40,
    specs: {
      cores: 2,
      threads: 2,
      baseFrequency: "3.4 GHz",
      boostFrequency: null,
      cache: "4MB",
      tdp: 46,
      socket: "LGA1700"
    },
    features: [
      "Integrated Intel UHD Graphics 710",
      "DDR5/DDR4 Memory Support",
      "PCIe 4.0 Support",
      "Efficient Power Consumption"
    ],
    imageUrl: "/images/intel-celeron.png",
    description: "Entry-level processor for basic computing tasks and everyday use."
  },
  // New High-End CPU
  {
    id: "cpu-006",
    category: "Processors",
    name: "AMD Ryzen Threadripper PRO 5995WX",
    brand: "AMD",
    price: 8999.99,
    stock: 5,
    specs: {
      cores: 64,
      threads: 128,
      baseFrequency: "2.7 GHz",
      boostFrequency: "4.5 GHz",
      cache: "288MB",
      tdp: 280,
      socket: "sWRX8"
    },
    features: [
      "128 PCIe 4.0 Lanes",
      "8-Channel DDR4 Memory Support",
      "AMD PRO Security",
      "Designed for Workstations"
    ],
    imageUrl: "/images/amd-threadripper.png",
    description: "High-end workstation processor for professional content creation and scientific computing."
  },
  {
    id: "gpu-001",
    category: "Graphics Cards",
    name: "NVIDIA GeForce RTX 4090",
    brand: "NVIDIA",
    price: 7519.95,
    stock: 7,
    specs: {
      architecture: "Ada Lovelace",
      vram: "24GB GDDR6X",
      coreClock: "2.23 GHz",
      boostClock: "2.52 GHz",
      rtCores: 128,
      tensorCores: 512,
      tdp: 450
    },
    features: [
      "DLSS 3.0 support",
      "Hardware-accelerated ray tracing",
      "8K gaming capable",
      "AV1 encoding support"
    ],
    imageUrl: "/images/nvidia-rtx4090.png",
    description: "NVIDIA's flagship graphics card delivering unparalleled performance for gaming and creative workflows."
  },
  {
    id: "gpu-002",
    category: "Graphics Cards",
    name: "AMD Radeon RX 7900 XTX",
    brand: "AMD",
    price: 4699.95,
    stock: 12,
    specs: {
      architecture: "RDNA 3",
      vram: "24GB GDDR6",
      gameClock: "2.3 GHz",
      boostClock: "2.5 GHz",
      computeUnits: 96,
      rayAccelerators: 96,
      tdp: 355
    },
    features: [
      "FSR 3.0 support",
      "Hardware-accelerated ray tracing",
      "DisplayPort 2.1 support",
      "AV1 encode/decode"
    ],
    imageUrl: "/images/amd-7900xtx.png",
    description: "AMD's premium graphics solution with exceptional rasterization performance and improved ray tracing capabilities."
  },
  {
    id: "gpu-003",
    category: "Graphics Cards",
    name: "NVIDIA GeForce RTX 4060",
    brand: "NVIDIA",
    price: 1399.99,
    stock: 20,
    specs: {
      architecture: "Ada Lovelace",
      vram: "8GB GDDR6",
      coreClock: "1.83 GHz",
      boostClock: "2.46 GHz",
      rtCores: 24,
      tensorCores: 96,
      tdp: 115
    },
    features: [
      "DLSS 3.0 support",
      "Ray tracing capabilities",
      "AV1 encoding",
      "Low power consumption"
    ],
    imageUrl: "/images/nvidia-rtx4060.png",
    description: "Budget-friendly RTX card offering great 1080p gaming performance with ray tracing and DLSS."
  },
  {
    id: "gpu-004",
    category: "Graphics Cards",
    name: "AMD Radeon RX 7600",
    brand: "AMD",
    price: 1199.99,
    stock: 18,
    specs: {
      architecture: "RDNA 3",
      vram: "8GB GDDR6",
      gameClock: "2.25 GHz",
      boostClock: "2.66 GHz",
      computeUnits: 32,
      rayAccelerators: 32,
      tdp: 165
    },
    features: [
      "FSR 3.0 technology",
      "AV1 encode/decode",
      "DisplayPort 2.1",
      "Efficient power design"
    ],
    imageUrl: "/images/amd-7600.png",
    description: "Entry-level RDNA 3 GPU delivering solid 1080p gaming performance at an affordable price point."
  },
  // New Entry-Level GPU
  {
    id: "gpu-005",
    category: "Graphics Cards",
    name: "AMD Radeon RX 6400",
    brand: "AMD",
    price: 649.99,
    stock: 25,
    specs: {
      architecture: "RDNA 2",
      vram: "4GB GDDR6",
      gameClock: "2.0 GHz",
      boostClock: "2.3 GHz",
      computeUnits: 12,
      rayAccelerators: 12,
      tdp: 53
    },
    features: [
      "AMD Smart Access Memory",
      "FidelityFX Super Resolution",
      "Radeon Anti-Lag",
      "Low Profile Design"
    ],
    imageUrl: "/images/amd-rx6400.png",
    description: "Entry-level graphics card for light gaming and multimedia tasks."
  },
  // New High-End GPU
  {
    id: "gpu-006",
    category: "Graphics Cards",
    name: "NVIDIA RTX A6000 Ada Generation",
    brand: "NVIDIA",
    price: 29999.99,
    stock: 3,
    specs: {
      architecture: "Ada Lovelace",
      vram: "48GB GDDR6",
      coreClock: "1.4 GHz",
      boostClock: "1.8 GHz",
      cudaCores: 18176,
      tensorCores: 568,
      tdp: 300
    },
    features: [
      "Professional Visualization",
      "Certified for Workstation Use",
      "Error Correction Code (ECC) Memory",
      "VirtualLink Support"
    ],
    imageUrl: "/images/nvidia-a6000.png",
    description: "High-end professional graphics card for demanding visualization and compute workloads."
  },
  {
    id: "ram-001",
    category: "Memory",
    name: "Corsair Dominator Platinum RGB DDR5-6000",
    brand: "Corsair",
    price: 892.95,
    stock: 32,
    specs: {
      capacity: "32GB (2x16GB)",
      type: "DDR5",
      speed: "6000MHz",
      casLatency: "CL36",
      voltage: "1.35V"
    },
    features: [
      "Patented DHX cooling technology",
      "12 individually addressable RGB LEDs per module",
      "iCUE software compatibility",
      "Tight timing optimization"
    ],
    imageUrl: "/images/corsair-dominator.png",
    description: "Premium memory modules with stunning RGB lighting and exceptional performance for high-end systems."
  },
  {
    id: "ram-002",
    category: "Memory",
    name: "Kingston FURY Beast DDR5-4800",
    brand: "Kingston",
    price: 399.99,
    stock: 40,
    specs: {
      capacity: "16GB (2x8GB)",
      type: "DDR5",
      speed: "4800MHz",
      casLatency: "CL38",
      voltage: "1.1V"
    },
    features: [
      "Low-profile heat spreader",
      "Intel XMP 3.0 ready",
      "Plug N Play functionality",
      "Lifetime warranty"
    ],
    imageUrl: "/images/kingston-fury.png",
    description: "Affordable DDR5 memory delivering reliable performance for mid-range gaming and productivity systems."
  },
  // New Entry-Level RAM
  {
    id: "ram-005",
    category: "Memory",
    name: "Corsair ValueSelect DDR4-2666",
    brand: "Corsair",
    price: 199.99,
    stock: 50,
    specs: {
      capacity: "8GB (1x8GB)",
      type: "DDR4",
      speed: "2666MHz",
      casLatency: "CL19",
      voltage: "1.2V"
    },
    features: [
      "Reliable Performance",
      "Tested for Compatibility",
      "Limited Lifetime Warranty",
      "Standard Height"
    ],
    imageUrl: "/images/corsair-valueselect.png",
    description: "Basic DDR4 memory module for general computing and system upgrades."
  },
  // New High-End RAM
  {
    id: "ram-006",
    category: "Memory",
    name: "G.Skill Trident Z5 Royal DDR5-8000",
    brand: "G.Skill",
    price: 1499.99,
    stock: 8,
    specs: {
      capacity: "32GB (2x16GB)",
      type: "DDR5",
      speed: "8000MHz",
      casLatency: "CL38",
      voltage: "1.45V"
    },
    features: [
      "Extreme Performance",
      "Polished Aluminum Heatspreaders",
      "Customizable RGB Lighting",
      "Optimized for Intel Platforms"
    ],
    imageUrl: "/images/gskill-tridentz-royal.png",
    description: "High-end DDR5 memory kit for overclocking and enthusiast builds."
  },
  {
    id: "ssd-001",
    category: "Storage",
    name: "Samsung 990 PRO NVMe SSD",
    brand: "Samsung",
    price: 1174.95,
    stock: 25,
    specs: {
      capacity: "2TB",
      interface: "PCIe 4.0 x4",
      formFactor: "M.2 2280",
      readSpeed: "7,450 MB/s",
      writeSpeed: "6,900 MB/s",
      endurance: "1,200 TBW"
    },
    features: [
      "Samsung V-NAND technology",
      "Samsung MKX controller",
      "Dynamic Thermal Guard",
      "AES 256-bit encryption"
    ],
    imageUrl: "/images/samsung-990pro.png",
    description: "High-performance NVMe SSD delivering exceptional speeds and reliability for demanding workloads."
  },
  {
    id: "ssd-002",
    category: "Storage",
    name: "Crucial P3 NVMe SSD",
    brand: "Crucial",
    price: 299.99,
    stock: 35,
    specs: {
      capacity: "1TB",
      interface: "PCIe 3.0 x4",
      formFactor: "M.2 2280",
      readSpeed: "3,500 MB/s",
      writeSpeed: "3,000 MB/s",
      endurance: "220 TBW"
    },
    features: [
      "Micron 3D NAND",
      "SLC caching technology",
      "Low power consumption",
      "5-year warranty"
    ],
    imageUrl: "/images/crucial-p3.png",
    description: "Budget-friendly NVMe SSD offering good performance for everyday computing and casual gaming."
  },
  // New Entry-Level SSD
  {
    id: "ssd-005",
    category: "Storage",
    name: "Kingston A400 SATA SSD",
    brand: "Kingston",
    price: 149.99,
    stock: 45,
    specs: {
      capacity: "240GB",
      interface: "SATA III",
      formFactor: "2.5 inch",
      readSpeed: "500 MB/s",
      writeSpeed: "350 MB/s",
      endurance: "80 TBW"
    },
    features: [
      "Fast Boot Times",
      "Improved System Responsiveness",
      "Shock-Resistant",
      "Three-Year Limited Warranty"
    ],
    imageUrl: "/images/kingston-a400.png",
    description: "Entry-level SATA SSD for faster boot times and improved system performance."
  },
  // New High-End SSD
  {
    id: "ssd-006",
    category: "Storage",
    name: "Sabrent Rocket 4 Plus-G NVMe SSD",
    brand: "Sabrent",
    price: 1999.99,
    stock: 6,
    specs: {
      capacity: "8TB",
      interface: "PCIe 4.0 x4",
      formFactor: "M.2 2280",
      readSpeed: "7,100 MB/s",
      writeSpeed: "6,600 MB/s",
      endurance: "6000 TBW"
    },
    features: [
      "High Capacity Storage",
      "Extreme Performance",
      "Advanced Wear Leveling",
      "Five-Year Limited Warranty"
    ],
    imageUrl: "/images/sabrent-rocket.png",
    description: "High-capacity NVMe SSD for demanding applications and large file storage."
  },
  {
    id: "mb-001",
    category: "Motherboards",
    name: "ASUS ROG Maximus Z790 Hero",
    brand: "ASUS",
    price: 2960.95,
    stock: 8,
    specs: {
      chipset: "Intel Z790",
      formFactor: "ATX",
      memorySlots: 4,
      maxMemory: "128GB",
      pcieSlots: "2x PCIe 5.0 x16, 1x PCIe 4.0 x4",
      sataConnectors: 6,
      m2Slots: 5
    },
    features: [
      "Wi-Fi 6E and 2.5Gb Ethernet",
      "Thunderbolt 4 ports",
      "20+1 power stages",
      "ROG SupremeFX ALC4082 audio",
      "Aura Sync RGB lighting"
    ],
    imageUrl: "/images/asus-maximus.png",
    description: "Premium Z790 motherboard with extensive features for enthusiasts and overclockers."
  },
  {
    id: "mb-002",
    category: "Motherboards",
    name: "MSI PRO B760M-A DDR4",
    brand: "MSI",
    price: 599.99,
    stock: 22,
    specs: {
      chipset: "Intel B760",
      formFactor: "Micro-ATX",
      memorySlots: 4,
      maxMemory: "128GB",
      pcieSlots: "1x PCIe 4.0 x16, 1x PCIe 3.0 x1",
      sataConnectors: 4,
      m2Slots: 2
    },
    features: [
      "2.5Gb Ethernet",
      "Steel-reinforced PCIe slot",
      "Extended heatsink design",
      "Flash BIOS button",
      "Pre-installed I/O shield"
    ],
    imageUrl: "/images/msi-b760m.png",
    description: "Value-oriented motherboard providing essential features and reliability for budget PC builds."
  },
  // New Entry-Level Motherboard
  {
    id: "mb-005",
    category: "Motherboards",
    name: "ASRock H610M-HDV/M.2",
    brand: "ASRock",
    price: 349.99,
    stock: 30,
    specs: {
      chipset: "Intel H610",
      formFactor: "Micro-ATX",
      memorySlots: 2,
      maxMemory: "64GB",
      pcieSlots: "1x PCIe 4.0 x16, 1x PCIe 3.0 x1",
      sataConnectors: 4,
      m2Slots: 1
    },
    features: [
      "Supports 12th Gen Intel Processors",
      "High-Speed M.2 Slot",
      "Gigabit LAN",
      "Solid Capacitor Design"
    ],
    imageUrl: "/images/asrock-h610m.png",
    description: "Entry-level motherboard for basic computing and office tasks."
  },
  // New High-End Motherboard
  {
    id: "mb-006",
    category: "Motherboards",
    name: "GIGABYTE TRX50 AERO D",
    brand: "GIGABYTE",
    price: 5499.99,
    stock: 4,
    specs: {
      chipset: "AMD TRX50",
      formFactor: "E-ATX",
      memorySlots: 4,
      maxMemory: "256GB",
      pcieSlots: "4x PCIe 5.0 x16",
      sataConnectors: 8,
      m2Slots: 5
    },
    features: [
      "Supports AMD Ryzen Threadripper PRO 7000 Series",
      "Advanced Thermal Design",
      "10GbE LAN",
      "Thunderbolt 4 Support"
    ],
    imageUrl: "/images/gigabyte-trx50.png",
    description: "High-end workstation motherboard for professional content creation and scientific computing."
  },
  {
    id: "psu-001",
    category: "Power Supplies",
    name: "Seasonic PRIME TX-1000",
    brand: "Seasonic",
    price: 1409.95,
    stock: 14,
    specs: {
      wattage: "1000W",
      efficiency: "80+ Titanium",
      formFactor: "ATX",
      modular: "Fully Modular",
      fanSize: "135mm Fluid Dynamic Bearing"
    },
    features: [
      "Micro-Tolerance Load Regulation",
      "Premium Hybrid Fan Control",
      "Japanese capacitors",
      "12-year warranty"
    ],
    imageUrl: "/images/seasonic-prime.png",
    description: "Ultra-high efficiency power supply with exceptional build quality and reliability."
  },
  {
    id: "psu-002",
    category: "Power Supplies",
    name: "EVGA 650 BQ",
    brand: "EVGA",
    price: 329.99,
    stock: 30,
    specs: {
      wattage: "650W",
      efficiency: "80+ Bronze",
      formFactor: "ATX",
      modular: "Semi-Modular",
      fanSize: "120mm"
    },
    features: [
      "Heavy-duty protections (OVP, UVP, OCP, OPP, SCP)",
      "Quiet fan operation",
      "Japanese capacitors",
      "3-year warranty"
    ],
    imageUrl: "/images/evga-650bq.png",
    description: "Reliable and affordable power supply offering sufficient power for mid-range gaming systems."
  },
  // New Entry-Level PSU
  {
    id: "psu-005",
    category: "Power Supplies",
    name: "Corsair CV450",
    brand: "Corsair",
    price: 249.99,
    stock: 35,
    specs: {
      wattage: "450W",
      efficiency: "80+ Bronze",
      formFactor: "ATX",
      modular: "Non-Modular",
      fanSize: "120mm"
    },
    features: [
      "Reliable Performance",
      "Low Noise Operation",
      "Compact Design",
      "Three-Year Warranty"
    ],
    imageUrl: "/images/corsair-cv450.png",
    description: "Entry-level power supply for basic desktop systems."
  },
  // New High-End PSU
  {
    id: "psu-006",
    category: "Power Supplies",
    name: "be quiet! Dark Power Pro 13 1300W",
    brand: "be quiet!",
    price: 2799.99,
    stock: 5,
    specs: {
      wattage: "1300W",
      efficiency: "80+ Titanium",
      formFactor: "ATX",
      modular: "Fully Modular",
      fanSize: "135mm Silent Wings"
    },
    features: [
      "Overclocking Key",
      "Silent Operation",
      "High-Quality Components",
      "Ten-Year Warranty"
    ],
    imageUrl: "/images/bequiet-darkpower.png",
    description: "High-end power supply for extreme gaming and workstation builds."
  },
  {
    id: "cooling-001",
    category: "Cooling",
    name: "NZXT Kraken X73 RGB",
    brand: "NZXT",
    price: 939.95,
    stock: 16,
    specs: {
      radiatorSize: "360mm",
      fanCount: 3,
      fanSpeed: "500-2000 RPM",
      noise: "21-36 dBA",
      pumpRPM: "800-2800 RPM"
    },
    features: [
      "Infinity mirror RGB design",
      "CAM-powered for performance monitoring",
      "Aer P radiator fans included",
      "Advanced pump with 6-year warranty"
    ],
    imageUrl: "/images/nzxt-kraken.png",
    description: "Premium all-in-one liquid cooler with distinctive RGB lighting and excellent cooling performance."
  },
  {
    id: "cooling-002",
    category: "Cooling",
    name: "Deepcool AK400",
    brand: "Deepcool",
    price: 149.99,
    stock: 28,
    specs: {
      type: "Air Cooler",
      fanCount: 1,
      fanSpeed: "500-1850 RPM",
      noise: "27 dBA",
      height: "155mm"
    },
    features: [
      "4 direct-contact heatpipes",
      "120mm PWM fan",
      "Universal socket compatibility",
      "Pre-applied thermal paste"
    ],
    imageUrl: "/images/deepcool-ak400.png",
    description: "Budget-friendly air cooler providing efficient cooling for mainstream processors at a fraction of the cost."
  },
  // New Entry-Level Cooler
  {
    id: "cooling-005",
    category: "Cooling",
    name: "ARCTIC Alpine 17 LP",
    brand: "ARCTIC",
    price: 79.99,
    stock: 40,
    specs: {
      type: "Air Cooler",
      fanCount: 1,
      fanSpeed: "100-3000 RPM",
      noise: "0.3 Sone",
      height: "66.2mm"
    },
    features: [
      "Low Profile Design",
      "Pre-Applied MX-4 Thermal Paste",
      "Quiet Operation",
      "Easy Installation"
    ],
    imageUrl: "/images/arctic-alpine.png",
    description: "Entry-level low-profile cooler for compact systems."
  },
  // New High-End Cooler
  {
    id: "cooling-006",
    category: "Cooling",
    name: "Alphacool Eisbaer Pro Aurora 420",
    brand: "Alphacool",
    price: 1699.99,
    stock: 3,
    specs: {
      type: "Liquid Cooler",
      radiatorSize: "420mm",
      fanCount: 3,
      fanSpeed: "0-2000 RPM",
      noise: "31.4 dBA",
      pumpRPM: "2600 RPM"
    },
    features: [
      "Expandable Design",
      "Full Copper Radiator",
      "Addressable RGB Lighting",
      "High Cooling Capacity"
    ],
    imageUrl: "/images/alphacool-eisbaer.png",
    description: "High-end liquid cooler for extreme overclocking and demanding systems."
  },
  {
    id: "case-001",
    category: "Cases",
    name: "Lian Li O11 Dynamic EVO",
    brand: "Lian Li",
    price: 798.95,
    stock: 11,
    specs: {
      formFactor: "Mid Tower",
      dimensions: "465mm x 285mm x 459mm",
      motherboardSupport: "E-ATX, ATX, Micro-ATX, Mini-ITX",
      expansion: "7 PCI slots",
      driveSlots: "6x 2.5\", 4x 3.5\"",
      cooling: "Up to 10 fans, multiple radiator support"
    },
    features: [
      "Reversible design with interchangeable front and side panels",
      "Tool-less tempered glass side panels",
      "Versatile fan and radiator mounting options",
      "Innovative cable management system",
      "Front USB-C port"
    ],
    imageUrl: "/images/lianli-o11.png",
    description: "Award-winning case design offering exceptional flexibility and clean aesthetics for showcase builds."
  },
  {
    id: "case-002",
    category: "Cases",
    name: "Corsair 4000D Airflow",
    brand: "Corsair",
    price: 399.99,
    stock: 25,
    specs: {
      formFactor: "Mid Tower",
      dimensions: "453mm x 230mm x 466mm",
      motherboardSupport: "ATX, Micro-ATX, Mini-ITX",
      expansion: "7 PCI slots",
      driveSlots: "2x 2.5\", 2x 3.5\"",
      cooling: "Up to 6 fans, 360mm front radiator support"
    },
    features: [
      "High-airflow front panel design",
      "Tool-less tempered glass side panel",
      "RapidRoute cable management system",
      "Removable dust filters",
      "Front USB-C port"
    ],
    imageUrl: "/images/corsair-4000d.png",
    description: "Affordable mid-tower case with excellent airflow design and modern features for budget-conscious builders."
  },
  // New Entry-Level Case
  {
    id: "case-005",
    category: "Cases",
    name: "Cooler Master MasterBox Q300L",
    brand: "Cooler Master",
    price: 299.99,
    stock: 30,
    specs: {
      formFactor: "Micro-ATX",
      dimensions: "387mm x 230mm x 378mm",
      motherboardSupport: "Micro-ATX, Mini-ITX",
      expansion: "4 PCI slots",
      driveSlots: "1x 3.5\", 2x 2.5\"",
      cooling: "Up to 6 fans, 240mm front radiator support"
    },
    features: [
      "Compact Design",
      "Magnetic Dust Filters",
      "Edge-to-Edge Acrylic Side Panel",
      "Positionable I/O Panel"
    ],
    imageUrl: "/images/coolermaster-q300l.png",
    description: "Entry-level micro-ATX case for compact and budget-friendly builds."
  },
  // New High-End Case
  {
    id: "case-006",
    category: "Cases",
    name: "Phanteks Enthoo Elite",
    brand: "Phanteks",
    price: 2999.99,
    stock: 2,
    specs: {
      formFactor: "Super Tower",
      dimensions: "750mm x 270mm x 615mm",
      motherboardSupport: "E-ATX, ATX, Micro-ATX, Mini-ITX",
      expansion: "10 PCI slots",
      driveSlots: "13x 3.5\", 6x 2.5\"",
      cooling: "Up to 15 fans, multiple radiator support"
    },
    features: [
      "Dual System Support",
      "Tempered Glass Panels",
      "RGB Lighting Integration",
      "Extensive Water Cooling Support"
    ],
    imageUrl: "/images/phanteks-enthoo-elite.png",
    description: "High-end super tower case with extensive features for extreme builds and custom water cooling."
  }
];