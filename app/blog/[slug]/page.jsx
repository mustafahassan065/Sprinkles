import Link from 'next/link';
import { notFound } from 'next/navigation';

const PHONE     = '(972) 755-9019';
const PHONE_TEL = '9727559019';

/* ════════════════════════════════════════════════════════════
   ALL 7 BLOG POSTS — exact client content, phone number added
════════════════════════════════════════════════════════════ */
const posts = {

  /* ── BLOG 1 ── */
  'backflow-prevention-code-compliance': {
    title:    'Backflow Prevention and Code Compliance Services',
    date:     'November 2024',
    readTime: '5 min read',
    category: 'Code Compliance',
    image:    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85&fit=crop',
    excerpt:  'Backflow prevention protects your drinking water and keeps your irrigation system compliant with local codes. Many homeowners overlook this part of the system.',
    sections: [
      {
        heading: null,
        body: `Backflow prevention protects your drinking water. It also keeps your irrigation system compliant with local codes. Many homeowners overlook this part of the system. It is not visible like a lawn or landscape. But it plays a critical role in protecting your home and the public water supply. Sprinklers and Lawns provides backflow prevention services across Dallas Fort Worth to keep your system safe and compliant.`,
      },
      {
        heading: 'What Backflow Is and Why It Matters',
        body: `Backflow occurs when water flows in the wrong direction. Instead of clean water moving into your irrigation system, contaminated water can move back into your home's water supply.`,
        list: ['Fertilizers','Bacteria','Chemicals','Dirty water from irrigation lines'],
        listNote: 'This creates a serious health risk.',
      },
      {
        heading: 'When Backflow Happens',
        body: `Backflow usually occurs when water pressure drops. Common causes include:`,
        list: ['Water main breaks','Fire hydrant use','High demand during peak usage','System pressure changes'],
        listNote: 'Without proper protection, contamination can spread through your home and nearby properties.',
      },
      {
        heading: 'Backflow Prevention Devices',
        body: `Different systems require different levels of protection.`,
        subsections: [
          { sub:'Pressure Vacuum Breaker', items:['Used in most residential irrigation systems','Installed above ground','Protects against basic contamination'] },
          { sub:'Double Check Valve Assembly', items:['Used where risk is lower','Installed in standard irrigation setups','Provides moderate protection'] },
          { sub:'Reduced Pressure Zone Device', items:['Used in high risk systems','Required when chemicals or fertilizers are injected','Provides the highest level of protection'] },
        ],
        listNote: 'Local codes determine which device is required.',
      },
      {
        heading: 'Code Compliance Requirements',
        body: `Installing a device is not enough. Most cities in North Texas require ongoing compliance. This includes:`,
        list: ['Proper installation','System testing after installation','Annual inspections','Submission of test results to the city','Device registration in some areas'],
        listNote: 'Failure to follow these steps can lead to fines and violations.',
      },
      {
        heading: 'Testing and Certification',
        body: `A certified backflow tester must inspect the device. If it passes, it receives certification. This confirms that the system meets local code requirements. Annual testing is required to keep the system compliant and working properly.`,
      },
      {
        heading: 'Why Compliance Is Important',
        body: `Backflow prevention protects more than your home. It helps:`,
        list: ['Protect your drinking water','Prevent contamination','Meet city regulations','Avoid fines and penalties','Maintain a safe irrigation system'],
        listNote: 'Ignoring this part of the system can lead to serious issues.',
      },
      {
        heading: 'Our Backflow Prevention Services',
        body: `Sprinklers and Lawns provides complete backflow services. We handle:`,
        list: ['Device installation','System inspection','Backflow testing coordination','Code compliance guidance','System evaluation'],
        listNote: 'We make sure your system meets all local requirements.',
      },
      {
        heading: 'Important for Homeowners',
        body: `Do not assume your system is compliant. Even if a contractor installed the system, testing and documentation must be verified. Many homeowners only find issues after receiving notices or penalties. A simple system check can prevent these problems.`,
      },
      {
        heading: 'Why Choose Sprinklers and Lawns',
        list: ['Knowledge of North Texas irrigation codes','Proper device selection and installation','Support with testing and compliance','Clear communication','Reliable service'],
        listNote: 'We focus on protecting your water supply and keeping your system compliant.',
      },
    ],
    ctaText: `Not sure if your system meets local code?\n\nCall ${PHONE} to schedule a backflow inspection in Dallas Fort Worth.\n\nSprinklers and Lawns helps protect your water supply and keep your irrigation system compliant.`,
  },

  /* ── BLOG 2 ── */
  'lawn-care-equipment-texas': {
    title:    'Choosing the Right Lawn Care Equipment for Texas Yards',
    date:     'October 2024',
    readTime: '5 min read',
    category: 'Lawn Care',
    image:    'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=85&fit=crop',
    excerpt:  'Lawn care in Texas is not simple. Heat, clay soil, and fast growing grass make it harder to maintain a healthy lawn. Using the wrong equipment makes the job even more difficult.',
    sections: [
      {
        heading: null,
        body: `Lawn care in Texas is not simple. Heat, clay soil, and fast growing grass make it harder to maintain a healthy lawn. Using the wrong equipment makes the job even more difficult. Sprinklers and Lawns helps homeowners across Dallas Fort Worth understand which lawn care equipment works best for local conditions.`,
      },
      {
        heading: 'Why Equipment Selection Matters',
        body: `Texas lawns face constant stress.`,
        list: ['High temperatures','Dense soil','Rapid grass growth','Seasonal changes'],
        listNote: 'The right tools help you manage these conditions and maintain a consistent lawn.',
      },
      {
        heading: 'Lawn Mowers for Different Yard Sizes',
        body: `Every lawn needs the right mower.`,
        subsections: [
          { sub:'Push Mowers',          items:['Best for small yards','Easy to store and maintain'] },
          { sub:'Self Propelled Mowers', items:['Work well for medium yards','Help reduce physical effort','Good for uneven terrain'] },
          { sub:'Riding Mowers',         items:['Best for large properties','Save time and effort','Provide consistent cutting'] },
        ],
        listNote: 'Sharp blades are important. Clean cuts improve lawn health and prevent damage.',
      },
      {
        heading: 'Trimmers and Edgers for Clean Results',
        body: `Mowing alone is not enough.`,
        subsections: [
          { sub:'String Trimmers', items:['Reach areas mowers cannot','Useful near fences and garden beds'] },
          { sub:'Edgers',          items:['Create clean lines along sidewalks and driveways','Improve overall lawn appearance'] },
        ],
        listNote: 'Both tools help maintain a finished and professional look.',
      },
      {
        heading: 'Irrigation Tools for Texas Heat',
        body: `Water management is critical in Texas.`,
        subsections: [
          { sub:'Smart Controllers',      items:['Adjust watering based on weather','Help reduce water waste'] },
          { sub:'Drip Irrigation Systems', items:['Deliver water directly to plants','Improve efficiency and reduce runoff'] },
        ],
        listNote: 'Proper irrigation tools protect your lawn during hot weather.',
      },
      {
        heading: 'Fertilizer Spreaders for Even Coverage',
        body: `Fertilizer must be applied evenly.`,
        subsections: [
          { sub:'Broadcast Spreaders', items:['Best for large lawns','Distribute material across wide areas'] },
          { sub:'Handheld Spreaders',  items:['Work well for small areas','Useful for spot treatments'] },
        ],
        listNote: 'Even application improves growth and prevents patchy areas.',
      },
      {
        heading: 'Aeration Equipment for Soil Health',
        body: `Compacted soil limits growth.`,
        subsections: [
          { sub:'Manual Aerators', items:['Work for small areas','Used for light compaction'] },
          { sub:'Core Aerators',   items:['Best for large lawns','Remove soil plugs','Improve airflow and water absorption'] },
        ],
        listNote: 'Aeration is important for clay soil conditions in Dallas Fort Worth.',
      },
      {
        heading: 'Basic Lawn Tools Every Homeowner Needs',
        body: `Simple tools support regular maintenance.`,
        list: ['Gloves for protection','Rakes for cleanup and thatch control','Pruning shears for trimming plants','Wheelbarrows for moving materials','Soil test kits to check nutrient levels'],
        listNote: 'These tools help maintain a clean and healthy lawn.',
      },
      {
        heading: 'Building the Right Equipment Setup',
        body: `Start with the basics. A mower, trimmer, and proper watering system cover most needs. Additional tools can be added based on lawn size and condition. Choosing the right equipment saves time, reduces effort, and improves results.`,
      },
      {
        heading: 'Why Choose Sprinklers and Lawns',
        list: ['Experience with Texas lawn conditions','Practical equipment recommendations','Focus on efficiency and performance','Knowledge of local soil and climate','Clear and direct guidance'],
        listNote: 'We help homeowners maintain strong and healthy lawns with the right tools and approach.',
      },
    ],
    ctaText: `Not sure which equipment your lawn needs?\n\nCall ${PHONE} to schedule a lawn care consultation in Dallas Fort Worth.\n\nSprinklers and Lawns helps you choose the right tools for better lawn performance.`,
  },

  /* ── BLOG 3 ── */
  'identifying-fixing-common-irrigation-issues': {
    title:    'Identifying and Fixing Common Irrigation Issues',
    date:     'September 2024',
    readTime: '6 min read',
    category: 'Irrigation Tips',
    image:    'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&q=85&fit=crop',
    excerpt:  'Irrigation systems do not fail overnight. Small issues develop over time. Soil movement, weather changes, and system age all affect performance.',
    sections: [
      {
        heading: null,
        body: `Irrigation systems do not fail overnight. Small issues develop over time. Soil movement, weather changes, and system age all affect performance. These problems lead to uneven watering, dry spots, and water waste.\n\nSprinklers and Lawns helps property owners across Dallas Fort Worth identify irrigation issues early and fix them before they become costly repairs.`,
      },
      {
        heading: 'Why Irrigation Problems Occur',
        body: `Irrigation systems work under changing conditions.`,
        list: ['Soil shifts over time','Weather changes stress the system','Landscaping is modified','Components wear out'],
        listNote: 'Even a well installed system can lose efficiency if not checked regularly.',
      },
      {
        heading: 'Common Irrigation Issues',
        body: `Irrigation can have multiple problems that require solutions. Understanding the problem helps fix it quickly.`,
        subsections: [
          { sub:'Clogged or Broken Sprinkler Heads',  items:['Debris and damage can block water flow','Spray becomes weak or uneven','Water may pool around the head'] },
          { sub:'Leaky Valves or Cracked Pipes',       items:['Underground leaks waste water','Wet spots stay visible','Zones may not shut off completely'] },
          { sub:'Misaligned Sprinkler Heads',          items:['Heads may spray sidewalks or miss grass areas','Soil movement and foot traffic often cause this'] },
          { sub:'Low Pressure in One Zone',            items:['A single weak zone usually points to a pipe break or valve issue','Coverage becomes inconsistent'] },
          { sub:'Oversaturated Areas',                 items:['Too much water in one area can come from leaks or incorrect programming','Soil stays soft and water collects on the surface'] },
        ],
      },
      {
        heading: 'Understanding Flex Pipe in Irrigation Systems',
        body: `The flex pipe connects sprinkler heads to the main irrigation line. It allows movement and helps prevent breakage. It is commonly used in:`,
        list: ['High traffic areas','Areas near sidewalks and driveways','Locations with shifting soil'],
        listNote: 'This flexibility protects the system but can also create problems if not managed properly.',
      },
      {
        heading: 'When Flex Pipe Causes Problems',
        body: `Flex pipe can allow too much movement over time. This can lead to:`,
        list: ['Sprinkler heads shifting out of position','Uneven spray coverage','Heads sinking below ground level','Poor pop up performance'],
        listNote: 'If a head keeps moving or spraying unevenly, the flex pipe connection may need adjustment.',
      },
      {
        heading: 'Monthly Irrigation System Checks',
        body: `Regular checks help catch problems early. Look for:`,
        list: ['Dry spots in the lawn','Water pooling or soggy areas','Tilted or sunken sprinkler heads','Unusual sounds during operation','Zones not turning on or off correctly'],
        listNote: 'Early detection reduces repair costs and prevents larger system failures.',
      },
      {
        heading: 'Basic Repair Tools to Keep on Hand',
        body: `Simple tools can help with minor fixes.`,
        list: ['Spare nozzles','Replacement risers','Flex pipe connectors','Hand tools','Sprinkler adjustment tools'],
        listNote: 'For larger issues, professional service is recommended.',
      },
      {
        heading: 'Why Early Repairs Matter',
        body: `Ignoring small irrigation issues leads to bigger problems.`,
        list: ['Water bills increase','Plant health declines','Soil erosion can occur','System damage becomes more expensive'],
        listNote: 'Fixing problems early keeps your system efficient and your landscape healthy.',
      },
      {
        heading: 'Why Choose Sprinklers and Lawns',
        list: ['Accurate irrigation system diagnosis','Professional repair solutions','Experience with North Texas conditions','Focus on water efficiency','Clear communication and service'],
        listNote: 'We focus on fixing the problem correctly and improving system performance.',
      },
    ],
    ctaText: `Noticing dry spots, leaks, or uneven watering?\n\nCall ${PHONE} to schedule an irrigation system inspection in Dallas Fort Worth.\n\nSprinklers and Lawns helps identify issues early and restore proper system performance.`,
  },

  /* ── BLOG 4 ── */
  'lawn-aeration-north-texas': {
    title:    'Lawn Aeration Services in North Texas',
    date:     'August 2024',
    readTime: '5 min read',
    category: 'Lawn Care',
    image:    'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=85&fit=crop',
    excerpt:  'Soil compaction is one of the most common problems in Texas lawns. When soil becomes dense, grass roots struggle to grow. Water does not absorb properly.',
    sections: [
      {
        heading: null,
        body: `Soil compaction is one of the most common problems in Texas lawns. When soil becomes dense, grass roots struggle to grow. Water does not absorb properly. Nutrients stay on the surface. Over time, the lawn becomes thin, patchy, and weak.\n\nSprinklers and Lawns provides professional lawn aeration services across Dallas Fort Worth to restore soil structure and improve lawn health.`,
      },
      {
        heading: 'What Lawn Aeration Does',
        body: `Lawn aeration opens the soil and allows air, water, and nutrients to reach the roots. This process creates space below the surface so roots can grow deeper and stronger.\n\nWithout aeration, compacted soil blocks root development and reduces overall lawn performance.`,
      },
      {
        heading: 'Types of Lawn Aeration',
        body: `There are two common methods used for aeration.`,
        subsections: [
          { sub:'Spike Aeration', items:['This method pushes holes into the soil','It is quick but does not remove soil','In clay soils, it can increase compaction around the hole'] },
          { sub:'Core Aeration',  items:['This method removes small plugs of soil from the ground','It creates open channels that allow better movement of water and nutrients'] },
        ],
        listNote: 'Core aeration works best for North Texas lawns with heavy clay soil.',
      },
      {
        heading: 'Why Aeration Is Important in North Texas',
        body: `Soil conditions in Dallas Fort Worth create ongoing stress on lawns.`,
        list: ['Clay soil holds water and compacts easily','Heat dries out shallow roots','Foot traffic and mowing increase soil density'],
        listNote: 'Aeration helps correct these issues. It improves water absorption and reduces runoff. It allows nutrients to reach deeper into the soil. It supports stronger root systems that handle heat and drought better.',
      },
      {
        heading: 'Signs Your Lawn Needs Aeration',
        body: `You may need aeration if you notice:`,
        list: ['Water pooling or runoff','Dry or thin patches','Hard soil that is difficult to penetrate','Uneven growth across the lawn','Thatch buildup on the surface'],
        listNote: 'These signs show that the soil is not allowing proper movement of water and nutrients.',
      },
      {
        heading: 'Best Time to Aerate in Texas',
        body: `Timing is important for recovery.\n\nFor warm season grasses such as Bermuda, Zoysia, and St Augustine, aeration works best in late spring or early summer. This is when the grass is actively growing.\n\nFor cool season grasses, early fall is the best time.\n\nAvoid aeration during peak summer heat or drought. Stressed grass will not recover properly.`,
      },
      {
        heading: 'How Lawn Aeration Is Performed',
        body: `A proper aeration process includes:`,
        list: ['Watering the lawn before service to soften the soil','Using core aeration equipment to remove soil plugs','Passing over the lawn for full coverage','Leaving plugs on the surface to break down naturally'],
        listNote: 'After aeration, the lawn absorbs water and nutrients more effectively.',
      },
      {
        heading: 'Post Aeration Benefits',
        body: `Aeration improves several key areas of lawn performance.`,
        list: ['Stronger root growth','Better water absorption','Reduced soil compaction','Improved nutrient uptake','Thicker and healthier turf'],
        listNote: 'It also prepares the lawn for fertilization and overseeding.',
      },
      {
        heading: 'Professional vs DIY Aeration',
        body: `Aeration can be done by homeowners, but results vary. Small lawns may be handled with rented equipment. Larger lawns require more time and effort.\n\nProfessional aeration provides deeper soil penetration and better coverage. It is more effective for compacted soil and long term improvement.`,
      },
      {
        heading: 'Why Choose Sprinklers and Lawns',
        list: ['Experience with North Texas soil conditions','Proper equipment for deep core aeration','Focus on long term lawn health','Efficient and reliable service','Clear recommendations based on lawn condition'],
        listNote: 'We focus on improving soil structure and helping your lawn recover and grow stronger.',
      },
    ],
    ctaText: `If your lawn shows signs of compaction or poor growth, aeration can help restore its health.\n\nCall ${PHONE} to schedule lawn aeration service in Dallas Fort Worth.\n\nSprinklers and Lawns helps improve soil conditions and support stronger, healthier lawns.`,
  },

  /* ── BLOG 5 ── */
  'lawn-fertilization-grass-type-texas': {
    title:    'Lawn Fertilization by Grass Type in Texas',
    date:     'July 2024',
    readTime: '6 min read',
    category: 'Lawn Care',
    image:    'https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1200&q=85&fit=crop',
    excerpt:  'Fertilizer is not one size fits all. Each grass type in Texas requires a different nutrient plan. Using the wrong fertilizer leads to weak growth, poor color, and wasted money.',
    sections: [
      {
        heading: null,
        body: `Fertilizer is not one size fits all. Each grass type in Texas requires a different nutrient plan. Using the wrong fertilizer leads to weak growth, poor color, and wasted money. Sprinklers and Lawns provides lawn fertilization guidance across Dallas Fort Worth based on grass type, season, and soil conditions.`,
      },
      {
        heading: 'Why Grass Type Matters',
        body: `Texas lawns include different grass species. Each one grows at a different rate. Each one reacts differently to heat and watering.\n\nUsing the correct fertilizer improves:`,
        list: ['Lawn color','Thickness','Root strength','Heat resistance'],
        listNote: 'Matching fertilizer to grass type is key to long term lawn health.',
      },
      {
        heading: 'Bermuda Grass Fertilization',
        body: `Bermuda grass grows fast and needs regular feeding.\n\nRecommended Fertilizer: High nitrogen blend such as 16 4 8\nBest Timing: Late spring through early fall\nApplication Guidance: Apply every 6 to 8 weeks`,
        list: ['Use slow release fertilizer','Water deeply after application'],
        listNote: 'Bermuda responds well to nitrogen. Proper feeding creates a dense and durable lawn.',
      },
      {
        heading: 'St Augustine Grass Fertilization',
        body: `St Augustine requires controlled feeding.\n\nRecommended Fertilizer: Moderate nitrogen with higher potassium such as 15 0 15\nBest Timing: Early spring and mid summer`,
        list: ['Use slow release products','Water after application','Avoid feeding during dormancy'],
        listNote: 'Too much nitrogen can damage this grass. Balanced feeding helps it handle heat and stress.',
      },
      {
        heading: 'Zoysia Grass Fertilization',
        body: `Zoysia grows slowly and needs balanced nutrients.\n\nRecommended Fertilizer: Balanced blend such as 10 10 10 or 15 5 10\nBest Timing: Spring and early fall`,
        list: ['Fertilize during active growth','Avoid feeding during extreme heat','Use moderate nitrogen levels'],
        listNote: 'Too much nitrogen can create thatch buildup. Balanced feeding supports steady growth.',
      },
      {
        heading: 'Fescue Grass Fertilization',
        body: `Fescue performs best in cooler conditions.\n\nRecommended Fertilizer: Higher nitrogen and phosphorus such as 20 10 10\nBest Timing: Fall and early spring`,
        list: ['Apply before winter and again in early spring','Avoid fertilizing in summer heat','Water after application'],
        listNote: 'Fescue needs strong root development to handle seasonal changes.',
      },
      {
        heading: 'Soil Testing for Better Results',
        body: `Soil testing helps identify what your lawn needs. Testing prevents over fertilizing and improves efficiency. It shows:`,
        list: ['Nutrient levels','Soil condition','Fertilizer requirements'],
      },
      {
        heading: 'Proper Fertilization Practices',
        body: `Fertilizer works best with correct application.`,
        list: ['Use slow release products','Apply during active growth','Follow proper watering','Avoid over application'],
        listNote: 'Good timing and proper amounts improve results.',
      },
      {
        heading: 'Why Choose Sprinklers and Lawns',
        list: ['Knowledge of Texas grass types','Proper fertilizer recommendations','Focus on long term lawn health','Experience with local conditions','Clear and practical guidance'],
        listNote: 'We help homeowners maintain strong and healthy lawns throughout the year.',
      },
    ],
    ctaText: `Not sure which fertilizer your lawn needs?\n\nCall ${PHONE} to schedule lawn fertilization service in Dallas Fort Worth.\n\nSprinklers and Lawns helps match the right nutrients to your lawn for better growth and stronger results.`,
  },

  /* ── BLOG 6 ── */
  'lowering-ph-inert-potting-mixes-acid-plants': {
    title:    'Lowering pH in Inert Potting Mixes for Acid Loving Plants',
    date:     'June 2024',
    readTime: '6 min read',
    category: 'Plant Health',
    image:    'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1200&q=85&fit=crop',
    excerpt:  'Healthy plants start with proper root zone pH. Blueberries, azaleas, camellias, and gardenias require acidic growing conditions to absorb nutrients properly.',
    sections: [
      {
        heading: null,
        body: `Healthy plants start with proper root zone pH. Blueberries, azaleas, camellias, and gardenias require acidic growing conditions to absorb nutrients properly. When these plants are grown in inert potting mixes such as coco coir, perlite, rockwool, or peat-lite blends, pH management becomes extremely important. These growing media provide excellent drainage but offer very little natural buffering capacity. Without proper pH control, plants may struggle to absorb nutrients even when fertilization programs are correct.`,
      },
      {
        heading: 'Why pH Matters in Inert Potting Mixes',
        body: `Acid loving plants perform best when the root zone remains slightly acidic.\n\nProper pH levels help improve the availability of important nutrients such as:`,
        list: ['Iron','Manganese','Zinc','Copper','Phosphorus'],
        listNote: 'When pH levels rise too high, nutrient lockout can occur. Plants may begin showing yellow leaves, weak growth, or poor flowering even when nutrients are present in the growing medium.\n\nIn inert growing media, growers must actively manage pH because the growing mix does not naturally stabilize nutrient availability.',
      },
      {
        heading: 'Chelated Nutrients and pH Control',
        body: `Chelated nutrients help improve micronutrient availability, but they do not replace proper pH management.\n\nCommon chelates include:`,
        list: ['EDDHA','DTPA','EDTA'],
        listNote: 'Chelated iron can temporarily reduce deficiency symptoms, but high pH levels still limit the uptake of other nutrients such as phosphorus, manganese, and zinc. Maintaining proper pH remains the foundation of healthy plant growth.',
      },
      {
        heading: 'Methods for Lowering pH in Inert Growing Media',
        body: `Several methods can help maintain proper pH levels in soilless growing systems.`,
        subsections: [
          { sub:'Use Reverse Osmosis or Soft Water',    items:['Hard water often contains bicarbonates and calcium that naturally increase pH levels','Reverse osmosis water gives growers more control over nutrient management'] },
          { sub:'Add Acid to the Nutrient Solution',    items:['Phosphoric acid','Nitric acid','Citric acid','Acetic acid','Synthetic nutrient programs commonly use phosphoric or nitric acid, while organic growers may prefer citric or acetic acid for smaller adjustments'] },
          { sub:'Maintain a pH Between 5.2 and 5.8',   items:['Most acid loving plants grown in inert media perform best within this range'] },
          { sub:'Monitor pH Regularly',                 items:['Nutrient solution pH','Pot runoff or leachate pH','Small adjustments made regularly provide more stable growing conditions'] },
          { sub:'Avoid Overcorrecting',                 items:['Extremely low pH levels may damage roots and create nutrient toxicity issues','Gradual adjustments are safer and more effective'] },
        ],
      },
      {
        heading: 'Common pH Management Mistakes',
        body: `Several common mistakes can negatively affect acid loving plants.`,
        list: ['Relying only on chelated nutrients','Using high alkalinity tap water','Skipping runoff testing','Making large pH adjustments too quickly','Ignoring plant growth stages'],
        listNote: 'These issues often create nutrient imbalances and unnecessary plant stress.',
      },
      {
        heading: 'Benefits of Proper pH Management',
        body: `Maintaining stable pH levels helps:`,
        list: ['Improve nutrient uptake','Promote healthier roots','Increase flowering and fruit production','Reduce nutrient deficiencies','Improve overall plant vigor'],
        listNote: 'Healthy root zone conditions create stronger and more productive plants throughout the growing season.',
      },
      {
        heading: 'Why Monitoring Matters',
        body: `Inert growing systems provide excellent control, but successful growing depends on consistency.\n\nProper pH management helps growers:`,
        list: ['Avoid nutrient lockout','Improve fertilizer efficiency','Reduce plant stress','Maintain stable growing conditions','Support long term plant health'],
        listNote: 'Regular testing and gradual adjustments often produce the best results.',
      },
      {
        heading: 'Why Proper pH Control Is Important',
        body: `Acid loving plants require specific conditions to thrive. Proper pH management helps protect your growing investment and supports healthier plants from root development to flowering and fruit production.\n\nWhether growing in containers, greenhouse systems, or hydroponic setups, stable pH management remains one of the most important parts of successful plant care.`,
      },
      {
        heading: 'Final Thoughts',
        body: `Inert potting mixes offer excellent drainage and flexibility, but they require active pH management to maintain proper nutrient availability. Chelated nutrients can support plant health, but they should never replace consistent pH monitoring and adjustment.\n\nMaintaining a pH between 5.2 and 5.8 helps acid loving plants absorb nutrients efficiently and grow stronger throughout the season.`,
      },
      {
        heading: 'Why Choose Sprinklers and Lawns',
        body: `Sprinklers and Lawns understands the importance of proper soil chemistry, irrigation balance, and nutrient management for healthy plant growth. Years of experience working with irrigation systems, soil conditions, and landscape management across North Texas allows the team to identify pH related problems before they become costly plant losses.\n\nServices focus on long term plant health, efficient water usage, and proper growing conditions for both residential and specialty landscape applications.`,
      },
    ],
    ctaText: `Unhealthy plants, yellowing leaves, or poor growth may be signs of improper pH balance or irrigation problems.\n\nCall ${PHONE} to schedule a professional evaluation for your irrigation system, soil conditions, and plant health requirements in Dallas Fort Worth.`,
  },

  /* ── BLOG 7 ── */
  'lawn-soil-test-read-results': {
    title:    'How to Perform a Lawn Soil Test and Read the Results',
    date:     'May 2024',
    readTime: '5 min read',
    category: 'Lawn Care',
    image:    'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=1200&q=85&fit=crop',
    excerpt:  'Healthy grass starts below the surface. Many lawn problems in Texas are caused by poor soil conditions, not bad grass. A soil test helps identify these problems early.',
    sections: [
      {
        heading: null,
        body: `Healthy grass starts below the surface. Many lawn problems in Texas are caused by poor soil conditions, not bad grass. Compacted soil, nutrient deficiencies, and incorrect pH levels can weaken lawns and limit growth. A soil test helps identify these problems before they become expensive to fix.\n\nSprinklers and Lawns helps homeowners across Dallas Fort Worth understand their soil conditions and make informed lawn care decisions.`,
      },
      {
        heading: 'Why Soil Testing Matters',
        body: `Soil testing removes guesswork from lawn care.\n\nA proper test helps identify:`,
        list: ['Nutrient deficiencies','Soil pH imbalance','Drainage concerns','Overfertilization problems','Soil composition issues'],
        listNote: 'Texas soil conditions vary widely. Some properties contain dense clay soil while others contain sandy or compacted areas. Testing helps determine what your lawn actually needs.',
      },
      {
        heading: 'Benefits of Soil Testing',
        body: `Regular soil testing helps:`,
        list: ['Improve lawn color and thickness','Promote stronger root growth','Increase drought resistance','Improve fertilizer efficiency','Reduce water waste','Prevent unnecessary chemical applications'],
        listNote: 'Understanding soil conditions allows homeowners to treat problems accurately instead of relying on trial and error.',
      },
      {
        heading: 'Tools Needed for a Lawn Soil Test',
        body: `Basic soil testing requires only a few items:`,
        list: ['Soil test kit','Small shovel or trowel','Clean bucket or container','Plastic bag or sample container','Pen and labels for tracking samples'],
        listNote: 'Some soil test kits provide instant results while others require sending samples to a lab for detailed analysis.',
      },
      {
        heading: 'How to Collect a Soil Sample',
        body: `Accurate samples are important.\n\nFollow these steps:`,
        list: ['Select 5 to 10 random areas across the lawn','Dig approximately 4 to 6 inches deep','Remove grass, roots, and debris','Place small soil samples into a clean bucket','Mix the samples together thoroughly','Allow the sample to dry if required by the kit instructions'],
        listNote: 'Combining multiple samples creates a better representation of the entire lawn.',
      },
      {
        heading: 'Testing the Soil',
        body: `Follow the instructions included with the soil test kit carefully.\n\nAt home kits typically measure:`,
        list: ['Soil pH','Nitrogen levels','Phosphorus levels','Potassium levels'],
        listNote: 'Lab testing may also include micronutrients, organic matter levels, and soil composition analysis. Always label samples properly if testing multiple lawn areas.',
      },
      {
        heading: 'Understanding Soil Test Results',
        body: `Soil test reports provide important information about lawn health.`,
        subsections: [
          { sub:'Soil pH',     items:['Most Texas grasses perform best between a pH of 6.0 and 7.0','Low pH means the soil is acidic','High pH means the soil is alkaline','Soil amendments such as lime or sulfur may help correct imbalance'] },
          { sub:'Nitrogen',    items:['Nitrogen supports green color, leaf growth, and overall lawn density','Low nitrogen often causes pale or weak grass'] },
          { sub:'Phosphorus',  items:['Phosphorus supports root development and establishment','Many Texas lawns already contain sufficient phosphorus','Excess application may create unnecessary buildup'] },
          { sub:'Potassium',   items:['Potassium improves drought resistance, stress tolerance, and disease resistance','Balanced potassium levels help lawns handle Texas heat more effectively'] },
        ],
      },
      {
        heading: 'When Soil Testing Is Recommended',
        body: `Soil testing is especially useful when:`,
        list: ['Grass appears thin or yellow','Bare spots develop','Fertilizer results are inconsistent','Water runoff increases','New sod is installed','Lawn renovations are planned'],
        listNote: 'Testing once every few years helps maintain long term lawn performance.',
      },
      {
        heading: 'Why Professional Guidance Matters',
        body: `Soil testing provides data, but understanding how to apply the results is equally important.\n\nSprinklers and Lawns helps homeowners interpret soil conditions and recommend:`,
        list: ['Proper fertilization schedules','Irrigation adjustments','Soil amendments','Water management strategies','Long term lawn improvement plans'],
      },
      {
        heading: 'Why Choose Sprinklers and Lawns',
        list: ['Knowledge of North Texas soil conditions','Experience with irrigation and lawn health','Focus on water efficiency','Clear recommendations without guesswork','Professional lawn and irrigation evaluations'],
        listNote: 'Our goal is to help homeowners create stronger and healthier lawns through proper soil and irrigation management.',
      },
    ],
    ctaText: `Not sure what your lawn needs?\n\nCall ${PHONE} to schedule a professional lawn and irrigation evaluation in Dallas Fort Worth.\n\nSprinklers and Lawns helps homeowners build healthier lawns from the ground up.`,
  },
};

/* ════════════════════════════════
   METADATA
════════════════════════════════ */
export async function generateMetadata({ params }) {
  const post = posts[params.slug];
  if (!post) return {};
  return {
    title: `${post.title} | Sprinklers and Lawns`,
    description: post.excerpt,
    alternates: { canonical: `https://sprinklersandlawns.com/blog/${params.slug}` },
  };
}

/* ════════════════════════════════
   RENDER HELPERS
════════════════════════════════ */
function RenderSection({ sec }) {
  return (
    <div style={{ marginBottom:'28px' }}>
      {sec.heading && (
        <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(22px,2.5vw,28px)', fontWeight:400, color:'var(--text)', margin:'36px 0 14px', lineHeight:1.2 }}>
          {sec.heading}
        </h2>
      )}
      {sec.body && sec.body.split('\n\n').map((para, i) => (
        <p key={i} style={{ fontSize:'17px', color:'var(--text-muted)', lineHeight:1.80, marginBottom:'14px' }}>{para}</p>
      ))}
      {sec.list && (
        <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'9px', margin:'14px 0' }}>
          {sec.list.map(item => (
            <li key={item} style={{ display:'flex', gap:'10px', fontSize:'16px', color:'var(--text-muted)', alignItems:'flex-start' }}>
              <span style={{ color:'var(--green)', fontWeight:700, flexShrink:0, marginTop:'2px' }}>✓</span> {item}
            </li>
          ))}
        </ul>
      )}
      {sec.listNote && sec.listNote.split('\n\n').map((para, i) => (
        <p key={i} style={{ fontSize:'16px', color:'var(--text-muted)', lineHeight:1.75, marginTop:'10px', marginBottom:'10px' }}>{para}</p>
      ))}
      {sec.subsections && sec.subsections.map(sub => (
        <div key={sub.sub} style={{ marginTop:'18px', paddingLeft:'16px', borderLeft:'3px solid var(--green-light)' }}>
          <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:700, color:'var(--green-dark)', marginBottom:'10px' }}>{sub.sub}</h3>
          <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'7px' }}>
            {sub.items.map(item => (
              <li key={item} style={{ display:'flex', gap:'10px', fontSize:'15px', color:'var(--text-muted)', alignItems:'flex-start' }}>
                <span style={{ color:'var(--green)', fontWeight:700, flexShrink:0 }}>✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* ════════════════════════════════
   PAGE
════════════════════════════════ */
export default function BlogPostPage({ params }) {
  const post = posts[params.slug];
  if (!post) notFound();

  const slugList = Object.keys(posts);
  const currentIdx = slugList.indexOf(params.slug);
  const related = slugList.filter(s => s !== params.slug).slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section style={{ position:'relative', height:'420px', overflow:'hidden', background:'#081a0a' }}>
        <img src={post.image} alt={post.title}
          style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', opacity:.32 }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(8,26,10,.65) 0%, rgba(8,26,10,.92) 100%)' }} />
        <div className="container" style={{ position:'relative', zIndex:2, padding:'88px 28px 52px', height:'100%', display:'flex', flexDirection:'column', justifyContent:'flex-end' }}>
          <nav style={{ marginBottom:'14px', fontSize:'13px', color:'rgba(255,255,255,.5)' }}>
            <Link href="/" style={{ color:'rgba(255,255,255,.5)', textDecoration:'none' }}>Home</Link>
            <span style={{ margin:'0 8px' }}>›</span>
            <Link href="/blog" style={{ color:'rgba(255,255,255,.5)', textDecoration:'none' }}>Blog</Link>
            <span style={{ margin:'0 8px' }}>›</span>
            <span style={{ color:'rgba(255,255,255,.85)' }}>{post.category}</span>
          </nav>
          <span style={{ display:'inline-flex', alignItems:'center', gap:'6px', background:'rgba(74,144,32,.3)', color:'var(--green-light)', fontSize:'11px', fontWeight:700, padding:'4px 12px', borderRadius:'20px', marginBottom:'12px', width:'fit-content' }}>
            {post.category}
          </span>
          <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(26px,3.8vw,44px)', fontWeight:400, color:'white', lineHeight:1.15, maxWidth:'760px', marginBottom:'14px' }}>
            {post.title}
          </h1>
          <div style={{ display:'flex', gap:'18px', flexWrap:'wrap' }}>
            <span style={{ color:'rgba(255,255,255,.55)', fontSize:'14px' }}>📅 {post.date}</span>
            <span style={{ color:'rgba(255,255,255,.55)', fontSize:'14px' }}>⏱ {post.readTime}</span>
            <span style={{ color:'rgba(255,255,255,.55)', fontSize:'14px' }}>✍️ Sprinklers and Lawns</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 300px', gap:'60px', alignItems:'start' }}>

            {/* Article */}
            <article>
              {post.sections.map((sec, i) => <RenderSection key={i} sec={sec} />)}

              {/* Service Areas */}
              <div style={{ background:'var(--green-xlight)', border:'1px solid var(--green-light)', borderRadius:'var(--r-lg)', padding:'24px', marginTop:'36px', marginBottom:'28px' }}>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'16px', fontWeight:700, color:'var(--green-dark)', marginBottom:'10px' }}>Areas We Serve</h3>
                <p style={{ fontSize:'15px', color:'var(--green-dark)', marginBottom:'12px' }}>
                  Sprinklers and Lawns serves homeowners throughout Dallas County, Tarrant County, Denton County, and Rockwall County — including:
                </p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'7px' }}>
                  {['Plano','Frisco','McKinney','Allen','Flower Mound','Lewisville','Richardson','Garland','Irving','Carrollton'].map(c => (
                    <span key={c} style={{ background:'white', border:'1px solid var(--green-light)', color:'var(--green-dark)', padding:'4px 12px', borderRadius:'20px', fontSize:'13px', fontWeight:500 }}>{c}</span>
                  ))}
                </div>
              </div>

              {/* CTA box */}
              <div style={{ background:'var(--green-deeper)', borderRadius:'var(--r-lg)', padding:'28px 32px', color:'white' }}>
                {post.ctaText.split('\n\n').map((para, i) => (
                  <p key={i} style={{ fontSize: i === 0 ? '17px' : '15px', color: i === 0 ? 'white' : 'rgba(255,255,255,.80)', lineHeight:1.75, marginBottom:'12px', fontWeight: i === 0 ? 500 : 400 }}>{para}</p>
                ))}
                <div style={{ display:'flex', gap:'12px', flexWrap:'wrap', marginTop:'8px' }}>
                  <a href={`tel:${PHONE_TEL}`} className="btn-white" style={{ fontSize:'15px', padding:'12px 26px' }}>📞 Call {PHONE}</a>
                  <Link href="/contact" className="btn-ghost" style={{ fontSize:'15px', padding:'12px 26px' }}>Book Online</Link>
                </div>
              </div>

              {/* Author */}
              <div style={{ background:'var(--off-white)', border:'1px solid var(--gray-100)', borderRadius:'var(--r-lg)', padding:'22px', marginTop:'28px', display:'flex', gap:'14px', alignItems:'flex-start' }}>
                <div style={{ width:'48px', height:'48px', borderRadius:'50%', background:'var(--green)', color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'20px', flexShrink:0 }}>🌿</div>
                <div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:'14px', fontWeight:700, color:'var(--green-dark)', marginBottom:'4px' }}>Joe Davis — Sprinklers and Lawns</div>
                  <div style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.65 }}>
                    Joe Davis earned a Bachelor of Science in Horticulture from Texas A&M University in 1989. He has provided professional irrigation services across Dallas-Fort Worth for over 25 years. License #8146.
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside style={{ position:'sticky', top:'88px', display:'flex', flexDirection:'column', gap:'20px' }}>
              {/* Call card */}
              <div style={{ background:'var(--green)', borderRadius:'var(--r-lg)', padding:'24px', color:'white', textAlign:'center' }}>
                <div style={{ fontSize:'32px', marginBottom:'8px' }}>📞</div>
                <p style={{ fontSize:'12px', color:'rgba(255,255,255,.7)', fontWeight:700, textTransform:'uppercase', letterSpacing:'.08em', marginBottom:'6px' }}>Call Us Directly</p>
                <a href={`tel:${PHONE_TEL}`} style={{ fontFamily:'var(--serif)', fontSize:'22px', fontWeight:400, color:'white', display:'block', marginBottom:'6px', textDecoration:'none' }}>{PHONE}</a>
                <p style={{ fontSize:'13px', color:'rgba(255,255,255,.65)' }}>Same-day or next-day service available</p>
              </div>

              {/* Related posts */}
              <div className="card">
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'14px', fontWeight:700, color:'var(--text)', marginBottom:'14px', textTransform:'uppercase', letterSpacing:'.06em' }}>More Articles</h3>
                <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
                  {related.map(slug => {
                    const p = posts[slug];
                    return (
                      <Link key={slug} href={`/blog/${slug}`} style={{ textDecoration:'none' }}>
                        <div style={{ display:'flex', gap:'10px', alignItems:'flex-start' }}>
                          <div style={{ width:'52px', height:'44px', borderRadius:'var(--r-sm)', overflow:'hidden', flexShrink:0 }}>
                            <img src={p.image.replace('1200','120')} alt={p.title} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                          </div>
                          <div>
                            <p style={{ fontSize:'13px', fontWeight:600, color:'var(--text)', lineHeight:1.4, marginBottom:'3px' }}>{p.title}</p>
                            <span style={{ fontSize:'11px', color:'var(--green)', fontWeight:600 }}>{p.category}</span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Services */}
              <div className="card" style={{ background:'var(--off-white)' }}>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:'14px', fontWeight:700, color:'var(--text)', marginBottom:'12px', textTransform:'uppercase', letterSpacing:'.06em' }}>Our Services</h3>
                <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
                  {[['Sprinkler Repair','/sprinkler-repair'],['Sprinkler Installation','/sprinkler-installation'],['Smart Controllers','/smart-controllers'],['Seasonal Maintenance','/seasonal-maintenance'],['Irrigation Design','/irrigation-design']].map(([label,href]) => (
                    <Link key={href} href={href} style={{ fontSize:'14px', color:'var(--green-dark)', textDecoration:'none', fontWeight:500, display:'flex', alignItems:'center', gap:'5px' }}>
                      → {label}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position:'relative', zIndex:2 }}>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(26px,4vw,40px)', fontWeight:400, color:'white', marginBottom:'14px' }}>
            Need Irrigation Service in <em style={{ color:'var(--green-light)' }}>Dallas-Fort Worth?</em>
          </h2>
          <p style={{ fontSize:'17px', color:'rgba(255,255,255,.72)', maxWidth:'500px', margin:'0 auto 32px', lineHeight:1.75 }}>
            Call {PHONE} to schedule professional irrigation service. Licensed. 1-year warranty. Same-day service available.
          </p>
          <div style={{ display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`tel:${PHONE_TEL}`} className="btn-white" style={{ fontSize:'16px', padding:'14px 32px' }}>📞 Call {PHONE}</a>
            <Link href="/book" className="btn-ghost" style={{ fontSize:'16px', padding:'14px 32px' }}>Book Online</Link>
          </div>
        </div>
      </section>
    </>
  );
}
