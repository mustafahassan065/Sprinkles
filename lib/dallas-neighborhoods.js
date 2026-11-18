// Content for the 8 Dallas neighborhood pages.
// One entry = one page at /service-areas/dallas/<slug>

const IMG_DIR = '/images/serviceareas/dallas-neighborhoods';

export const neighborhoods = [
  {
    slug: 'lake-highlands',
    name: 'Lake Highlands',
    display: 'Lake Highlands',
    seoTitle: 'Lake Highlands Sprinkler Repair, Dallas TX',
    metaDescription:
      'Sprinkler repair, installation, and smart irrigation for Lake Highlands homes in Dallas, TX. Established neighborhoods, mature trees. License #8146. Call (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, irrigation installation, and smart controller upgrades in Lake Highlands, northeast Dallas. From established streets near White Rock Creek to newer builds, we keep lawns and landscaping healthy and water-efficient.',
    introEm: 'Lake Highlands Homeowners',
    intro: [
      'Lake Highlands sits in northeast Dallas, bounded roughly by LBJ Freeway to the north, Northwest Highway to the south, and White Rock Creek to the west. The neighborhood grew up mainly in the 1950s through the 1970s, and its mix of ranch homes, updated properties, and newer infill means irrigation systems here range from original mid-century designs to modern installs. Sprinklers and Lawns has served Dallas homeowners for over 25 years, and Joe Davis, who earned a Bachelor of Science in Horticulture from Texas A&M in 1989, brings that experience to every Lake Highlands job.',
      'The trees are one of Lake Highlands’ defining features, and they shape how irrigation should work. Mature oaks and pecans cast heavy shade, send roots toward water, and change how much water a lawn actually needs. We look at the zones, the shade, and the soil before recommending repairs or upgrades, so the system fits the yard rather than the other way around.',
    ],
    highlights: [
      'Lake Highlands is in northeast Dallas, near White Rock Creek and LBJ Freeway',
      'Many homes were built from the 1950s through the 1970s, so original or heavily patched irrigation is common',
      'Mature oaks and pecans create heavy shade and send roots toward lateral lines and heads',
      'Heavy black clay soil holds water and drains slowly, so cycle-and-soak run times matter',
      'A mix of ranch homes, renovated properties, and newer infill means irrigation age varies block by block',
    ],
    issuesTitle: 'Irrigation issues Lake Highlands homes often face',
    issues: [
      {
        t: 'Tree roots and shifting soil',
        d: 'Mature trees seek water and can crush or lift lateral lines and tilt heads. Dallas’ expansive clay soil shifts as it wets and dries, which cracks older pipes and misaligns heads over time.',
      },
      {
        t: 'Systems that are 40 to 60 years old',
        d: 'Homes from the 1950s and 1960s may still have original valves, wiring, and pipe. Failures show up as zones that will not start, recurring leaks, and brown patches that never fully recover.',
      },
      {
        t: 'Heavy shade and dry patches',
        d: 'Running shaded and sunny zones on the same schedule wastes water and stresses grass. Zone tuning and smart controllers fix the mismatch.',
      },
      {
        t: 'Overspray onto walks and driveways',
        d: 'Tight lots and mature landscaping mean misdirected heads soak pavement. Realigning heads and switching to matched nozzles keeps water on the lawn.',
      },
    ],
    faqs: [
      {
        q: 'Can you repair an older sprinkler system in Lake Highlands?',
        a: 'Yes. Repairing and upgrading existing systems is a core part of what we do. We check zones, valves, wiring, and heads, explain what needs attention, and give you options before any work begins.',
      },
      {
        q: 'Do mature trees affect my irrigation?',
        a: 'They can. Roots can damage lines and heads, and shade changes how much water a lawn needs. We adjust zone layouts and run times for shaded and sunny areas, and we can reroute or replace lines damaged by roots.',
      },
      {
        q: 'Why does my lawn have brown patches even with the sprinklers running?',
        a: 'Common causes are clogged or misaligned heads, low water pressure, root intrusion, or zones running too long and causing runoff on clay soil. A system check identifies the cause before we recommend a fix.',
      },
      {
        q: 'How do I schedule service in Lake Highlands?',
        a: 'Call (972) 755-9019 or use the Book Now button. Sprinklers and Lawns is licensed in Texas (License #8146), and our work carries a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/lake-highlands.jpg`,
    img1Alt: 'Lake Highlands neighborhood in Dallas Texas',
    img2: `${IMG_DIR}/lake-highlands.jpg`,
    img2Alt: 'Sprinkler system service in Lake Highlands Dallas Texas',
  },

  {
    slug: 'lakewood',
    name: 'Lakewood',
    display: 'Lakewood',
    seoTitle: 'Lakewood Dallas Sprinkler Repair',
    metaDescription:
      'Sprinkler repair and irrigation upgrades for Lakewood homes in Dallas, TX. Historic properties, mature trees, tight lots. License #8146. Call (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, head replacement, and irrigation upgrades in Lakewood, one of East Dallas’ most established neighborhoods. We help historic and renovated homes get reliable coverage and lower water use.',
    introEm: 'Lakewood Homeowners',
    intro: [
      'Lakewood sits in East Dallas around White Rock Lake, with a housing stock that ranges from 1920s and 1930s Tudor and colonial homes to mid-century ranches and newer infill. The neighborhood’s mature canopy and tight, older lots make irrigation design a careful exercise. Sprinklers and Lawns has served Dallas for over 25 years, with Texas license #8146 and horticulture training from Texas A&M behind every job.',
      'Historic homes often come with irrigation that was added, extended, or patched over decades. Mismatched heads, mixed pipe, and unlabeled zones lead to uneven watering. We start with a careful look at what is in the ground, then repair what works, replace what does not, and program the system to match the lawn, the shade, and the soil.',
    ],
    highlights: [
      'Lakewood is in East Dallas near White Rock Lake, with homes dating from the 1920s onward',
      'Historic Tudor, colonial, and mid-century homes often have irrigation that grew piecemeal over decades',
      'Mature trees and heavy shade shape how each zone should be designed and run',
      'Tight lots and historic hardscape make overspray control important',
      'Heavy clay soil and mature roots call for zone-specific programming and careful head placement',
    ],
    issuesTitle: 'Irrigation issues Lakewood homes often face',
    issues: [
      {
        t: 'Piecemeal systems in historic homes',
        d: 'Many Lakewood irrigation systems have been patched or extended by several owners. Mismatched heads, mixed pipe, and unlabeled zones lead to uneven watering and wasted water.',
      },
      {
        t: 'Tree roots and aging lines',
        d: 'Large established trees send roots toward water. Roots can crush or shift lateral lines and tilt heads, causing leaks, dry patches, and soggy spots.',
      },
      {
        t: 'Overspray on historic hardscape',
        d: 'Tight lots, brick walks, and older fences mean misdirected heads soak places they should not. Realigning heads or switching to the right nozzles keeps water on the lawn.',
      },
      {
        t: 'Missing or outdated controls',
        d: 'Older controllers run fixed schedules that ignore the weather. Adding a smart controller and rain and freeze sensors cuts waste and meets current requirements.',
      },
    ],
    faqs: [
      {
        q: 'Can you work on a historic home’s sprinkler system in Lakewood?',
        a: 'Yes. We repair and upgrade existing systems, including older designs with mixed pipe and heads. We check zones, valves, wiring, and heads, and explain options before any work begins.',
      },
      {
        q: 'Can an old system be upgraded instead of replaced?',
        a: 'Often, yes. If the main lines and valves are sound, upgrading heads, nozzles, the controller, and sensors improves coverage and cuts water use at a fraction of the cost of a full replacement. If a system is beyond repair, we will tell you honestly.',
      },
      {
        q: 'How do mature trees affect irrigation in Lakewood?',
        a: 'Roots can damage lines and heads, and shade changes how much water a lawn needs. We adjust zone layouts and run times for shaded and sunny areas, and we reroute or replace lines roots have damaged.',
      },
      {
        q: 'How do I schedule service in Lakewood?',
        a: 'Call (972) 755-9019 or book online. We are licensed in Texas (License #8146) and back our work with a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/lakewood.jpg`,
    img1Alt: 'Lakewood neighborhood in Dallas Texas',
    img2: `${IMG_DIR}/lakewood.jpg`,
    img2Alt: 'Sprinkler repair for a Lakewood home in Dallas Texas',
  },

  {
    slug: 'park-cities',
    name: 'Park Cities',
    display: 'Park Cities',
    seoTitle: 'Park Cities Sprinkler Repair, Dallas',
    metaDescription:
      'Sprinkler repair and irrigation for Park Cities homes in Dallas, TX. Estate lots, mature landscaping, high-end systems. License #8146. Call (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, irrigation design, and smart controller upgrades in the Park Cities — Highland Park and University Park — where estate lots and mature landscaping demand careful, efficient irrigation.',
    introEm: 'Park Cities Homeowners',
    intro: [
      'The Park Cities — Highland Park and University Park — sit just north of downtown Dallas, with a housing stock that includes some of the most established estate properties in the city. Lots are generous, landscaping is often mature and carefully designed, and irrigation systems here tend to be larger and more complex than the Dallas average. Sprinklers and Lawns has served Dallas homeowners for over 25 years, with Texas license #8146 and horticulture training from Texas A&M behind every job.',
      'High-end landscapes need irrigation that matches their complexity: multiple hydrozones, drip for beds, dedicated zones for lawns, and controllers that respond to weather and season. We repair, tune, and upgrade these systems with the same care the landscaping was designed with.',
    ],
    highlights: [
      'The Park Cities include Highland Park and University Park, just north of downtown Dallas',
      'Estate lots and mature, designed landscaping are common, so irrigation systems are often larger and more complex',
      'Many properties use drip irrigation for beds alongside spray zones for turf',
      'Mature trees and formal landscaping call for precise zone design and matched nozzles',
      'Smart controllers and sensors help control water use on larger properties',
    ],
    issuesTitle: 'Irrigation issues Park Cities properties often face',
    issues: [
      {
        t: 'Complex, multi-zone systems',
        d: 'Large properties can have dozens of zones across turf, beds, and drip. One failed valve or clogged drip line can go unnoticed without regular inspection.',
      },
      {
        t: 'Aging systems in established homes',
        d: 'Many Park Cities homes have irrigation that has been extended or replaced in sections over the years. Mismatched components and unlabeled zones lead to uneven watering.',
      },
      {
        t: 'Overspray on hardscape and structures',
        d: 'Misdirected heads can soak brick, stone, and windows. Precise head placement and matched nozzles keep water on the landscape.',
      },
      {
        t: 'Water use on large lots',
        d: 'Fixed schedules waste water on big properties. Smart controllers with rain and freeze sensors and zone-by-zone programming cut waste significantly.',
      },
    ],
    faqs: [
      {
        q: 'Do you work on large, multi-zone irrigation systems in the Park Cities?',
        a: 'Yes. We service residential and estate systems, including turf zones, drip for beds, and multi-controller setups. Call us to discuss your property and schedule an assessment.',
      },
      {
        q: 'Can you repair drip irrigation for landscaping beds?',
        a: 'Yes. We repair and tune drip lines, emitters, and regulators alongside spray and rotor zones, and we check that each hydrozone is getting the right amount of water.',
      },
      {
        q: 'How do you reduce water use on a large property?',
        a: 'We repair leaks and broken heads, update nozzles and head placement, and program smart controllers with rain and freeze sensors so zones run only when needed.',
      },
      {
        q: 'How do I schedule service in the Park Cities?',
        a: 'Call (972) 755-9019 or use Book Now. We are licensed in Texas (License #8146) and provide a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/park-cities.jpg`,
    img1Alt: 'Park Cities neighborhood in Dallas Texas',
    img2: `${IMG_DIR}/park-cities.jpg`,
    img2Alt: 'Irrigation service for a Park Cities property in Dallas Texas',
  },

  {
    slug: 'preston-hollow',
    name: 'Preston Hollow',
    display: 'Preston Hollow',
    seoTitle: 'Preston Hollow Sprinkler Repair, Dallas',
    metaDescription:
      'Sprinkler repair, installation, and smart irrigation for Preston Hollow homes in Dallas, TX. Large lots, estate landscaping. License #8146. Call (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, irrigation installation, and smart controller upgrades in Preston Hollow, north Dallas, where large lots and estate landscaping call for efficient, well-designed irrigation.',
    introEm: 'Preston Hollow Homeowners',
    intro: [
      'Preston Hollow sits in north Dallas, bounded roughly by Walnut Hill Lane, Northwest Highway, Midway Road, and Central Expressway. The neighborhood is known for large lots, estate homes, and mature, designed landscaping, and irrigation systems here tend to be larger and more complex than the Dallas average. Sprinklers and Lawns has served Dallas homeowners for over 25 years, with Texas license #8146 and horticulture training from Texas A&M behind every job.',
      'Large properties need irrigation that matches their scale: multiple hydrozones, drip for beds and trees, dedicated zones for lawns, and controllers that respond to weather and season. We repair, tune, and upgrade these systems so every zone gets the water it needs and none gets more.',
    ],
    highlights: [
      'Preston Hollow is in north Dallas, with large lots and estate properties',
      'Mature, designed landscaping and extensive turf call for multi-zone irrigation and careful hydrozone planning',
      'Drip irrigation for beds and trees often runs alongside spray and rotor zones for lawns',
      'Smart controllers and sensors help control water use on larger properties',
      'Clay soil and mature roots require zone-specific programming and careful head placement',
    ],
    issuesTitle: 'Irrigation issues Preston Hollow properties often face',
    issues: [
      {
        t: 'Large, multi-zone systems',
        d: 'Estate lots can have dozens of zones across turf, beds, and drip. One failed valve or clogged drip line can go unnoticed without regular inspection.',
      },
      {
        t: 'Aging components on established properties',
        d: 'Many Preston Hollow systems have been extended or replaced in sections over the years. Mismatched components and unlabeled zones lead to uneven watering.',
      },
      {
        t: 'Overspray on hardscape and structures',
        d: 'Misdirected heads can soak driveways, stone, and windows. Precise head placement and matched nozzles keep water on the landscape.',
      },
      {
        t: 'Water use on large lots',
        d: 'Fixed schedules waste water on big properties. Smart controllers with rain and freeze sensors and zone-by-zone programming cut waste significantly.',
      },
    ],
    faqs: [
      {
        q: 'Do you work on large, multi-zone irrigation systems in Preston Hollow?',
        a: 'Yes. We service residential and estate systems, including turf zones, drip for beds and trees, and multi-controller setups. Call us to discuss your property and schedule an assessment.',
      },
      {
        q: 'Can you repair drip irrigation for landscaping beds and trees?',
        a: 'Yes. We repair and tune drip lines, emitters, and regulators alongside spray and rotor zones, and we check that each hydrozone is getting the right amount of water.',
      },
      {
        q: 'How do you reduce water use on a large property?',
        a: 'We repair leaks and broken heads, update nozzles and head placement, and program smart controllers with rain and freeze sensors so zones run only when needed.',
      },
      {
        q: 'How do I schedule service in Preston Hollow?',
        a: 'Call (972) 755-9019 or use Book Now. We are licensed in Texas (License #8146) and provide a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/preston-hollow.jpg`,
    img1Alt: 'Preston Hollow neighborhood in Dallas Texas',
    img2: `${IMG_DIR}/preston-hollow.jpg`,
    img2Alt: 'Irrigation service for a Preston Hollow property in Dallas Texas',
  },

  {
    slug: 'east-dallas',
    name: 'East Dallas',
    display: 'East Dallas',
    seoTitle: 'East Dallas Sprinkler Repair',
    metaDescription:
      'Sprinkler repair and irrigation service in East Dallas, TX. Historic homes, mature trees, tight lots. License #8146. Call (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, head replacement, and irrigation upgrades in East Dallas, where historic homes, mature trees, and tight lots shape every yard.',
    introEm: 'East Dallas Homeowners',
    intro: [
      'East Dallas covers a wide swath of the city east of Central Expressway and south of White Rock Lake, including historic neighborhoods such as Munger Place, Swiss Avenue, and Junius Heights alongside newer infill and mid-century streets. The housing stock is diverse, and so are the irrigation systems, from original mid-century designs to modern installs. Sprinklers and Lawns has served Dallas for over 25 years, with Texas license #8146 and horticulture training from Texas A&M behind every job.',
      'Historic homes often come with irrigation that was added, extended, or patched over decades. Mismatched heads, mixed pipe, and unlabeled zones lead to uneven watering. We start with a careful look at what is in the ground, then repair what works, replace what does not, and program the system to match the lawn, the shade, and the soil.',
    ],
    highlights: [
      'East Dallas includes historic neighborhoods such as Munger Place, Swiss Avenue, and Junius Heights',
      'Housing stock ranges from early 1900s homes to mid-century and newer infill',
      'Mature trees and heavy shade shape how each zone should be designed and run',
      'Tight lots and historic hardscape make overspray control important',
      'Heavy clay soil and mature roots call for zone-specific programming and careful head placement',
    ],
    issuesTitle: 'Irrigation issues East Dallas homes often face',
    issues: [
      {
        t: 'Piecemeal systems in historic homes',
        d: 'Many East Dallas irrigation systems have been patched or extended by several owners. Mismatched heads, mixed pipe, and unlabeled zones lead to uneven watering and wasted water.',
      },
      {
        t: 'Tree roots and aging lines',
        d: 'Large established trees send roots toward water. Roots can crush or shift lateral lines and tilt heads, causing leaks, dry patches, and soggy spots.',
      },
      {
        t: 'Overspray on historic hardscape',
        d: 'Tight lots, brick walks, and older fences mean misdirected heads soak places they should not. Realigning heads or switching to the right nozzles keeps water on the lawn.',
      },
      {
        t: 'Missing or outdated controls',
        d: 'Older controllers run fixed schedules that ignore the weather. Adding a smart controller and rain and freeze sensors cuts waste and meets current requirements.',
      },
    ],
    faqs: [
      {
        q: 'Can you work on a historic home’s sprinkler system in East Dallas?',
        a: 'Yes. We repair and upgrade existing systems, including older designs with mixed pipe and heads. We check zones, valves, wiring, and heads, and explain options before any work begins.',
      },
      {
        q: 'Can an old system be upgraded instead of replaced?',
        a: 'Often, yes. If the main lines and valves are sound, upgrading heads, nozzles, the controller, and sensors improves coverage and cuts water use at a fraction of the cost of a full replacement. If a system is beyond repair, we will tell you honestly.',
      },
      {
        q: 'How do mature trees affect irrigation in East Dallas?',
        a: 'Roots can damage lines and heads, and shade changes how much water a lawn needs. We adjust zone layouts and run times for shaded and sunny areas, and we reroute or replace lines roots have damaged.',
      },
      {
        q: 'How do I schedule service in East Dallas?',
        a: 'Call (972) 755-9019 or book online. We are licensed in Texas (License #8146) and back our work with a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/east-dallas.webp`,
    img1Alt: 'East Dallas neighborhood in Dallas Texas',
    img2: `${IMG_DIR}/east-dallas.webp`,
    img2Alt: 'Sprinkler repair for an East Dallas home in Dallas Texas',
  },

  {
    slug: 'north-dallas',
    name: 'North Dallas',
    display: 'North Dallas',
    seoTitle: 'North Dallas Sprinkler Repair',
    metaDescription:
      'Sprinkler repair, installation, and smart irrigation for North Dallas homes, TX. Established neighborhoods, newer builds. License #8146. Call (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, irrigation installation, and smart controller upgrades in North Dallas, from established mid-century neighborhoods to newer developments along the Dallas North Tollway.',
    introEm: 'North Dallas Homeowners',
    intro: [
      'North Dallas stretches north from Northwest Highway toward the suburbs, including established neighborhoods such as Preston Center, Hillcrest, and the streets around the Dallas North Tollway. Housing stock ranges from mid-century ranches to newer builds, and irrigation systems here reflect that range. Sprinklers and Lawns has served Dallas for over 25 years, with Texas license #8146 and horticulture training from Texas A&M behind every job.',
      'Older homes often have irrigation that has been extended or patched over the years, while newer homes may have builder-grade systems that benefit from upgrades. We look at the zones, the soil, and the landscape before recommending repairs or upgrades, so the system fits the yard.',
    ],
    highlights: [
      'North Dallas stretches north from Northwest Highway toward the suburbs',
      'Housing stock ranges from mid-century ranches to newer builds, so irrigation age varies block by block',
      'Builder-grade systems in newer homes often benefit from smart controllers and better zoning',
      'Heavy clay soil holds water and drains slowly, so cycle-and-soak run times matter',
      'Mature trees in older sections and newer plantings in others call for zone-by-zone programming',
    ],
    issuesTitle: 'Irrigation issues North Dallas homes often face',
    issues: [
      {
        t: 'Older systems reaching the end of their life',
        d: 'Valves, wiring, and heads installed decades ago wear out. Symptoms include zones that will not start, heads that stick or leak, and brown patches that keep coming back.',
      },
      {
        t: 'Builder-grade systems',
        d: 'Systems installed at construction are often designed to be functional rather than ideal. Adding a smart controller, adjusting nozzles, and rebalancing zones improves coverage and cuts water use.',
      },
      {
        t: 'Mixed sun and shade',
        d: 'Open lots and tree-covered yards need different schedules. Running every zone on the same schedule wastes water and stresses grass. Zone tuning and smart controllers solve this.',
      },
      {
        t: 'Runoff on clay soil',
        d: 'Clay holds water and drains slowly, so long runs cause runoff. Cycle-and-soak run times and matched nozzles let water soak in.',
      },
    ],
    faqs: [
      {
        q: 'My sprinkler system is original to the house. Should I replace it?',
        a: 'Not necessarily. We inspect the system first. If the main lines and valves are sound, replacing worn heads, nozzles, and the controller can extend its life considerably. If lines are failing in several places, we will explain when replacement makes more sense.',
      },
      {
        q: 'Should I upgrade the builder-installed sprinkler system in my newer home?',
        a: 'Often a partial upgrade is enough. Replacing worn heads, adding a smart controller, and fixing zone coverage gives many homeowners most of the benefit without a full rebuild.',
      },
      {
        q: 'Do smart controllers make sense for North Dallas homes?',
        a: 'For many yards, yes. Weather-based controllers adjust run times automatically, which helps in a climate with hot summers and sudden rain. They are especially useful on larger lots with mixed sun and shade.',
      },
      {
        q: 'How do I schedule irrigation service in North Dallas?',
        a: 'Call (972) 755-9019 or book online. We are licensed in Texas (License #8146) and back our work with a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/north-dallas.webp`,
    img1Alt: 'North Dallas neighborhood in Dallas Texas',
    img2: `${IMG_DIR}/north-dallas.webp`,
    img2Alt: 'Lawn and irrigation in North Dallas Texas',
  },

  {
    slug: 'uptown',
    name: 'Uptown',
    display: 'Uptown',
    seoTitle: 'Uptown Dallas Sprinkler Repair',
    metaDescription:
      'Sprinkler repair and irrigation for Uptown Dallas townhomes, condos, and businesses. Compact lots, shared landscaping. License #8146. Call (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, installation, and seasonal irrigation in Uptown Dallas, where townhomes, condominiums, and mixed-use properties call for compact, precise irrigation.',
    introEm: 'Uptown Dallas Properties',
    intro: [
      'Uptown Dallas sits just north of downtown, bounded roughly by Woodall Rodgers Freeway, Central Expressway, and the Katy Trail. It is one of the densest neighborhoods in the city, with townhomes, condominiums, apartment communities, and mixed-use buildings alongside restaurants and offices. Sprinklers and Lawns has served Dallas for over 25 years, with Texas license #8146 and horticulture training from Texas A&M behind every job.',
      'In a neighborhood like Uptown, irrigation has to be precise. Small yards, narrow planting strips, and shared common areas mean overspray is expensive and visible. We focus on matched nozzles, careful head placement, and controllers that respond to weather and season, so water lands where it is needed and nowhere else.',
    ],
    highlights: [
      'Uptown Dallas sits just north of downtown, near the Katy Trail and Woodall Rodgers Freeway',
      'Townhomes, condominiums, apartment communities, and mixed-use buildings share the neighborhood',
      'Compact lots and narrow planting strips call for low-angle nozzles and precise head placement',
      'Shared common areas need consistent schedules and reliable coverage, often managed by an HOA or property manager',
      'Smart controllers and sensors help control water costs for both individual units and larger properties',
    ],
    issuesTitle: 'Irrigation issues Uptown Dallas properties often face',
    issues: [
      {
        t: 'Small lots, tight spaces',
        d: 'Narrow strips and small yards need low-angle nozzles and careful spacing so water lands on the plants and not on the driveway, sidewalk, or neighbor’s wall.',
      },
      {
        t: 'Shared landscaping',
        d: 'Townhome and apartment communities rely on shared irrigation systems. One failure can affect many units, so quick repairs and regular inspections matter.',
      },
      {
        t: 'Overspray on pavement and structures',
        d: 'Misdirected heads can soak sidewalks, parking areas, and building walls. Re-aiming heads and updating nozzles keeps water where plants need it.',
      },
      {
        t: 'Water waste',
        d: 'Fixed-schedule timers water through the rain. Smart controllers with rain and freeze sensors cut waste and keep landscaping healthy.',
      },
    ],
    faqs: [
      {
        q: 'Do you work on townhome and condominium irrigation in Uptown?',
        a: 'Yes. We service residential and commercial properties, including common-area landscaping for HOAs and property managers.',
      },
      {
        q: 'My yard is small. Is a sprinkler system still worth it?',
        a: 'Often, yes. A properly designed system with the right nozzles waters a small yard evenly and saves the time of hand watering.',
      },
      {
        q: 'Can you set up regular maintenance for an apartment community?',
        a: 'Yes. Seasonal maintenance includes scheduled inspections and programming adjustments throughout the year, which helps catch problems early and keeps water use under control.',
      },
      {
        q: 'How do I schedule service in Uptown?',
        a: 'Call (972) 755-9019 or use Book Now. We are licensed in Texas (License #8146) and provide a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/uptown.webp`,
    img1Alt: 'Uptown Dallas neighborhood in Dallas Texas',
    img2: `${IMG_DIR}/uptown.webp`,
    img2Alt: 'Irrigation service in Uptown Dallas Texas',
  },

  {
    slug: 'lake-cliff',
    name: 'Lake Cliff',
    display: 'Lake Cliff',
    seoTitle: 'Lake Cliff Dallas Sprinkler Repair',
    metaDescription:
      'Sprinkler repair and irrigation service in Lake Cliff, Dallas TX. Historic homes, mature trees, tight lots. License #8146. Call (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, head replacement, and irrigation upgrades in Lake Cliff, a historic neighborhood in southwest Dallas near the Lake Cliff and Kidd Springs parks.',
    introEm: 'Lake Cliff Homeowners',
    intro: [
      'Lake Cliff sits in southwest Dallas, near the historic Lake Cliff Park and Kidd Springs Park, just south of the Trinity River and west of downtown. The neighborhood is known for its early 1900s homes, many of them Victorian, Craftsman, and Tudor, along with mature trees and a strong historic character. Sprinklers and Lawns has served Dallas for over 25 years, with Texas license #8146 and horticulture training from Texas A&M behind every job.',
      'Historic homes often come with irrigation that was added, extended, or patched over decades. Mismatched heads, mixed pipe, and unlabeled zones lead to uneven watering. We start with a careful look at what is in the ground, then repair what works, replace what does not, and program the system to match the lawn, the shade, and the soil.',
    ],
    highlights: [
      'Lake Cliff is in southwest Dallas, near Lake Cliff Park and Kidd Springs Park',
      'The neighborhood is known for its early 1900s Victorian, Craftsman, and Tudor homes',
      'Mature trees and heavy shade shape how each zone should be designed and run',
      'Tight lots and historic hardscape make overspray control important',
      'Heavy clay soil and mature roots call for zone-specific programming and careful head placement',
    ],
    issuesTitle: 'Irrigation issues Lake Cliff homes often face',
    issues: [
      {
        t: 'Piecemeal systems in historic homes',
        d: 'Many Lake Cliff irrigation systems have been patched or extended by several owners. Mismatched heads, mixed pipe, and unlabeled zones lead to uneven watering and wasted water.',
      },
      {
        t: 'Tree roots and aging lines',
        d: 'Large established trees send roots toward water. Roots can crush or shift lateral lines and tilt heads, causing leaks, dry patches, and soggy spots.',
      },
      {
        t: 'Overspray on historic hardscape',
        d: 'Tight lots, brick walks, and older fences mean misdirected heads soak places they should not. Realigning heads or switching to the right nozzles keeps water on the lawn.',
      },
      {
        t: 'Missing or outdated controls',
        d: 'Older controllers run fixed schedules that ignore the weather. Adding a smart controller and rain and freeze sensors cuts waste and meets current requirements.',
      },
    ],
    faqs: [
      {
        q: 'Can you work on a historic home’s sprinkler system in Lake Cliff?',
        a: 'Yes. We repair and upgrade existing systems, including older designs with mixed pipe and heads. We check zones, valves, wiring, and heads, and explain options before any work begins.',
      },
      {
        q: 'Can an old system be upgraded instead of replaced?',
        a: 'Often, yes. If the main lines and valves are sound, upgrading heads, nozzles, the controller, and sensors improves coverage and cuts water use at a fraction of the cost of a full replacement. If a system is beyond repair, we will tell you honestly.',
      },
      {
        q: 'How do mature trees affect irrigation in Lake Cliff?',
        a: 'Roots can damage lines and heads, and shade changes how much water a lawn needs. We adjust zone layouts and run times for shaded and sunny areas, and we reroute or replace lines roots have damaged.',
      },
      {
        q: 'How do I schedule service in Lake Cliff?',
        a: 'Call (972) 755-9019 or book online. We are licensed in Texas (License #8146) and back our work with a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/lake-cliff.jpg`,
    img1Alt: 'Lake Cliff neighborhood in Dallas Texas',
    img2: `${IMG_DIR}/lake-cliff.jpg`,
    img2Alt: 'Sprinkler repair for a Lake Cliff home in Dallas Texas',
  },
];

export function getNeighborhood(slug) {
  return neighborhoods.find((n) => n.slug === slug) || null;
}