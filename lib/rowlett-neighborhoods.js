// Content for the 8 Rowlett neighborhood pages.
// One entry = one page at /service-areas/rowlett/<slug>

const IMG_DIR = '/images/serviceareas/rowlett-neighborhoods';

export const neighborhoods = [
  {
    slug: 'waterview',
    name: 'Waterview',
    display: 'Waterview',
    seoTitle: 'Waterview Rowlett Sprinkler Repair',
    metaDescription:
      'Sprinkler repair and irrigation for Waterview in Rowlett, TX. Lake Ray Hubbard waterfront, master-planned, HOA landscaping. License #8146. (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, irrigation installation, and smart controller upgrades in Waterview, the master-planned community in Rowlett along Lake Ray Hubbard, with lakefront views, parks, and HOA-managed landscaping.',
    introEm: 'Waterview Homeowners',
    intro: [
      'Waterview is a master-planned community in Rowlett, near Lake Ray Hubbard, with lakefront views, neighborhood parks, greenbelts, and HOA-managed landscaping. Homes here are generally newer, and irrigation systems range from builder-installed to recent, but lakeside exposure changes how each yard should be watered. Sprinklers and Lawns has served Rowlett for over 25 years, with Texas license #8146 and horticulture training from Texas A&M behind every job.',
      'Yards near the lake behave differently from inland yards. Wind, sun exposure, and local clay soil all affect how water should be applied. We design and tune irrigation to match the land, not just the lawn.',
    ],
    highlights: [
      'Waterview is a master-planned community in Rowlett, near Lake Ray Hubbard',
      'Homes are generally newer, with builder-installed or recent irrigation systems',
      'Lakefront exposure brings wind and sun conditions that affect each zone',
      'Neighborhood HOAs often set landscape standards, so a healthy, even lawn matters',
      'Heavy clay soil holds water and drains slowly, so cycle-and-soak run times matter',
    ],
    issuesTitle: 'Irrigation issues Waterview homes often face',
    issues: [
      {
        t: 'Builder-grade systems',
        d: 'Systems installed at construction are often designed to be functional rather than ideal. Adding a smart controller, adjusting nozzles, and rebalancing zones improves coverage and cuts water use.',
      },
      {
        t: 'Wind and sun exposure near the lake',
        d: 'Open lots near the lake get hard sun and steady wind, which dry turf faster. Running every zone on the same schedule wastes water and stresses grass. Zone tuning and smart controllers solve this.',
      },
      {
        t: 'Runoff on clay soil',
        d: 'Clay holds water and drains slowly, so long runs cause runoff. Cycle-and-soak run times and matched nozzles let water soak in.',
      },
      {
        t: 'Overspray on hardscape',
        d: 'Tight lots and shared walking paths mean misdirected heads soak pavement. Realigning heads and switching to matched nozzles keeps water on the lawn.',
      },
    ],
    faqs: [
      {
        q: 'Do you service newer homes in Waterview?',
        a: 'Yes. We repair, tune, and upgrade irrigation on homes of all ages, including newer builder-installed systems.',
      },
      {
        q: 'Does the lake change how I should water?',
        a: 'It can. Wind and sun exposure near the lake dry turf faster, and local clay soil drains slowly. We set zones based on how each area drains and how much sun it gets.',
      },
      {
        q: 'Do smart controllers make sense for Waterview homes?',
        a: 'For many yards, yes. Weather-based controllers adjust run times automatically, which helps in a climate with hot summers and sudden rain. They are especially useful on lots with mixed sun and shade.',
      },
      {
        q: 'How do I schedule irrigation service in Waterview?',
        a: 'Call (972) 755-9019 or book online. We are licensed in Texas (License #8146) and back our work with a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/waterview.jpg`,
    img1Alt: 'Waterview community in Rowlett Texas',
    img2: `${IMG_DIR}/waterview.jpg`,
    img2Alt: 'Lawn and irrigation in Waterview Rowlett Texas',
  },

  {
    slug: 'dalrock-road-area',
    name: 'Dalrock Road Area',
    display: 'Dalrock Road Area',
    seoTitle: 'Dalrock Road Rowlett Sprinkler Repair',
    metaDescription:
      'Sprinkler repair and irrigation in the Dalrock Road area of Rowlett, TX. Established homes, newer builds, varied systems. License #8146. (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, head replacement, and irrigation upgrades in the Dalrock Road area of Rowlett, where established neighborhoods and newer builds share a mix of irrigation needs.',
    introEm: 'Dalrock Road Area Homeowners',
    intro: [
      'Dalrock Road runs north to south through west Rowlett, connecting established neighborhoods, newer subdivisions, and the corridors along Lakeview Parkway and Miller Road. Housing stock here ranges from 1980s and 1990s subdivisions to newer developments, and irrigation systems vary from original builder installs to recent upgrades. Sprinklers and Lawns has served Rowlett for over 25 years, with Texas license #8146 and horticulture training from Texas A&M behind every job.',
      'Older homes often have irrigation that has been extended or patched over the years, while newer homes may have builder-grade systems that benefit from upgrades. We look at the zones, the soil, and the landscape before recommending repairs or upgrades, so the system fits the yard.',
    ],
    highlights: [
      'Dalrock Road runs north to south through west Rowlett, near Lakeview Parkway and Miller Road',
      'Housing stock ranges from 1980s and 1990s subdivisions to newer developments',
      'Older systems often need updates; newer builder-grade systems benefit from smart controllers and better zoning',
      'Heavy clay soil holds water and drains slowly, so cycle-and-soak run times matter',
      'Mature trees in older sections and newer plantings in others call for zone-by-zone programming',
    ],
    issuesTitle: 'Irrigation issues in the Dalrock Road area',
    issues: [
      {
        t: 'Older systems reaching the end of their life',
        d: 'Valves, wiring, and heads installed in the 1980s and 1990s wear out. Symptoms include zones that will not start, heads that stick or leak, and brown patches that keep coming back.',
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
        q: 'My neighborhood was built in the 1980s or 1990s. Is my system likely to need work?',
        a: 'If the system is original, it is probably worth an inspection. Worn valves, brittle fittings, and misaligned heads are common at that age, and catching them early costs less than waiting for a failure.',
      },
      {
        q: 'Should I upgrade the builder-installed sprinkler system in my newer home?',
        a: 'Often a partial upgrade is enough. Replacing worn heads, adding a smart controller, and fixing zone coverage gives many homeowners most of the benefit without a full rebuild.',
      },
      {
        q: 'Does clay soil affect my sprinklers?',
        a: 'Yes. Clay holds water and drains slowly, so long runs can cause runoff, while soil movement can crack lines. We set shorter, split run times where it helps and repair any damage from shifting soil.',
      },
      {
        q: 'How do I schedule service in the Dalrock Road area?',
        a: 'Call (972) 755-9019 or use Book Now. We are licensed in Texas (License #8146) and provide a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/dalrock-road-area.jpg`,
    img1Alt: 'Dalrock Road area of Rowlett Texas',
    img2: `${IMG_DIR}/dalrock-road-area.jpg`,
    img2Alt: 'Irrigation service in the Dalrock Road area of Rowlett Texas',
  },

  {
    slug: 'rowlett-road-corridor',
    name: 'Rowlett Road Corridor',
    display: 'Rowlett Road Corridor',
    seoTitle: 'Rowlett Road Rowlett Sprinkler Repair',
    metaDescription:
      'Sprinkler repair and irrigation along the Rowlett Road corridor in Rowlett, TX. Homes, apartments, retail, offices. License #8146. (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, installation, and seasonal irrigation along the Rowlett Road corridor in Rowlett, from established neighborhoods to apartment communities and retail centers.',
    introEm: 'Rowlett Road Corridor Properties',
    intro: [
      'Rowlett Road runs north to south through central Rowlett, linking neighborhoods, apartment communities, shopping centers, and office properties along one of the city’s main corridors. Homes along the corridor range from 1980s and 1990s subdivisions to newer builds, and commercial properties include apartment complexes, retail, and office landscaping. Sprinklers and Lawns has served Rowlett for over 25 years, with Texas license #8146 and horticulture training from Texas A&M behind every job.',
      'That mix means irrigation needs range from a single home lawn to large commercial grounds. We handle both small repairs and larger commercial zones, with clear communication on every job.',
    ],
    highlights: [
      'Rowlett Road runs north to south through central Rowlett, linking neighborhoods and commercial areas',
      'The corridor includes established neighborhoods, apartment communities, retail, and office properties',
      'Commercial and multifamily properties often have many zones and need regular inspection and programming',
      'Frontage landscaping along a busy road shows problems quickly, so reliable coverage matters',
      'HOA and property manager accounts benefit from regular seasonal inspections and clear communication',
    ],
    issuesTitle: 'Irrigation issues along the Rowlett Road corridor',
    issues: [
      {
        t: 'Large, multi-zone systems',
        d: 'Commercial grounds and apartment communities can have dozens of zones. One failed valve or broken head can go unnoticed for weeks without regular inspection.',
      },
      {
        t: 'Overspray on pavement',
        d: 'Sprinklers that spray parking lots, sidewalks, and roads waste water and create hazards. Re-aiming heads and updating nozzles keeps water where plants need it.',
      },
      {
        t: 'Damage from mowing and traffic',
        d: 'Heads and lines near curbs and drive lanes are often hit by mowers and vehicles. We repair damage quickly and relocate heads where needed.',
      },
      {
        t: 'Water costs and compliance',
        d: 'Fixed schedules waste water. Smart controllers, sensors, and seasonal programming reduce water use and help properties meet irrigation requirements.',
      },
    ],
    faqs: [
      {
        q: 'Do you service commercial and apartment properties along Rowlett Road?',
        a: 'Yes. We offer commercial irrigation services as well as residential service. Call us to discuss your property and schedule an assessment.',
      },
      {
        q: 'Can you set up regular maintenance for an apartment community or shopping center?',
        a: 'Yes. Seasonal maintenance includes scheduled inspections and programming adjustments throughout the year.',
      },
      {
        q: 'How do you reduce water waste on large properties?',
        a: 'We repair leaks and broken heads, update nozzles and head placement, and program smart controllers with rain and freeze sensors so zones run only when needed.',
      },
      {
        q: 'How do I schedule service along Rowlett Road?',
        a: 'Call (972) 755-9019 or use Book Now. We are licensed in Texas (License #8146) and back our work with a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/rowlett-road-corridor.webp`,
    img1Alt: 'Rowlett Road corridor in Rowlett Texas',
    img2: `${IMG_DIR}/rowlett-road-corridor.webp`,
    img2Alt: 'Irrigation service along Rowlett Road in Rowlett Texas',
  },

  {
    slug: 'liberty-grove',
    name: 'Liberty Grove',
    display: 'Liberty Grove',
    seoTitle: 'Liberty Grove Rowlett Sprinkler Repair',
    metaDescription:
      'Sprinkler repair and irrigation for Liberty Grove in Rowlett, TX. Master-planned community, newer systems, HOA landscaping. License #8146. (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, installation, and smart controller upgrades in Liberty Grove, a master-planned community in Rowlett with parks, greenbelts, and HOA-managed landscaping.',
    introEm: 'Liberty Grove Homeowners',
    intro: [
      'Liberty Grove is a master-planned community in Rowlett, developed from the 2000s onward, with neighborhood parks, greenbelts, and HOA-managed landscaping. Homes here are generally newer, and irrigation systems are typically builder-installed or recent, but they still need tuning, repairs, and seasonal programming to keep landscaping healthy. Sprinklers and Lawns has served Rowlett for over 25 years, with Texas license #8146 and horticulture training from Texas A&M behind every job.',
      'In a community where landscaping is part of the appeal, we focus on efficient coverage, smart scheduling, and dependable repairs, so your irrigation system works the way the neighborhood expects it to.',
    ],
    highlights: [
      'Liberty Grove is a master-planned community in Rowlett with parks and greenbelts',
      'Homes date mainly from the 2000s onward, so systems are newer but still benefit from tuning and upgrades',
      'Neighborhood HOAs often set landscape standards, so a healthy, even lawn matters',
      'Greenbelt edges and park frontage create sun exposure, drainage, and edge-of-lawn conditions that affect each zone',
      'Builder-installed systems are often designed to minimum standards and benefit from smart controllers and better zoning',
    ],
    issuesTitle: 'Irrigation issues Liberty Grove homes often face',
    issues: [
      {
        t: 'Builder-grade systems',
        d: 'Systems installed at construction are often designed to be functional rather than ideal. Adding a smart controller, adjusting nozzles, and rebalancing zones improves coverage and cuts water use.',
      },
      {
        t: 'Systems approaching 15 to 20 years old',
        d: 'Homes from the early years of the community now have systems old enough to show wear: sticking valves, leaking fittings, and heads that no longer pop up or spray evenly.',
      },
      {
        t: 'Mixed sun and shade',
        d: 'Open lots and tree-covered yards need different schedules. Running every zone on the same schedule wastes water and stresses grass. Zone tuning and smart controllers solve this.',
      },
      {
        t: 'Landscape changes',
        d: 'New beds, trees, and patios change where water needs to go. Irrigation designed for the original landscape needs to be updated to match.',
      },
    ],
    faqs: [
      {
        q: 'My sprinkler system is original to my Liberty Grove home. Should I upgrade it?',
        a: 'Often a partial upgrade is enough. Replacing worn heads, adding a smart controller, and fixing zone coverage gives many homeowners most of the benefit without a full rebuild.',
      },
      {
        q: 'Can you help my lawn meet HOA expectations?',
        a: 'A properly working irrigation system is the foundation of a healthy lawn. We can fix coverage problems, adjust schedules for sun and shade, and upgrade to a smart controller. For specific HOA rules, check with your association, and we will work within them.',
      },
      {
        q: 'Do smart controllers make sense for Liberty Grove homes?',
        a: 'For many yards, yes. Weather-based controllers adjust run times automatically, which helps in a climate with hot summers and sudden rain. They are especially useful on larger lots with mixed sun and shade.',
      },
      {
        q: 'How do I schedule irrigation service in Liberty Grove?',
        a: 'Call (972) 755-9019 or book online. We are licensed in Texas (License #8146) and back our work with a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/liberty-grove.webp`,
    img1Alt: 'Liberty Grove community in Rowlett Texas',
    img2: `${IMG_DIR}/liberty-grove.webp`,
    img2Alt: 'Lawn and irrigation in Liberty Grove Rowlett Texas',
  },

  {
    slug: 'miller-road-area',
    name: 'Miller Road Area',
    display: 'Miller Road Area',
    seoTitle: 'Miller Road Rowlett Sprinkler Repair',
    metaDescription:
      'Sprinkler repair and irrigation in the Miller Road area of Rowlett, TX. Established homes, varied systems, mature trees. License #8146. (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, head replacement, and irrigation upgrades in the Miller Road area of Rowlett, where established neighborhoods and varied housing stock share a mix of irrigation needs.',
    introEm: 'Miller Road Area Homeowners',
    intro: [
      'Miller Road runs east to west through south Rowlett, connecting established neighborhoods, newer subdivisions, and the corridors along Dalrock Road and Rowlett Road. Housing stock here ranges from 1980s and 1990s subdivisions to newer developments, and irrigation systems vary from original builder installs to recent upgrades. Sprinklers and Lawns has served Rowlett for over 25 years, with Texas license #8146 and horticulture training from Texas A&M behind every job.',
      'Older homes often have irrigation that has been extended or patched over the years, while newer homes may have builder-grade systems that benefit from upgrades. We look at the zones, the soil, and the landscape before recommending repairs or upgrades, so the system fits the yard.',
    ],
    highlights: [
      'Miller Road runs east to west through south Rowlett, near Dalrock Road and Rowlett Road',
      'Housing stock ranges from 1980s and 1990s subdivisions to newer developments',
      'Older systems often need updates; newer builder-grade systems benefit from smart controllers and better zoning',
      'Heavy clay soil holds water and drains slowly, so cycle-and-soak run times matter',
      'Mature trees in older sections and newer plantings in others call for zone-by-zone programming',
    ],
    issuesTitle: 'Irrigation issues in the Miller Road area',
    issues: [
      {
        t: 'Older systems reaching the end of their life',
        d: 'Valves, wiring, and heads installed in the 1980s and 1990s wear out. Symptoms include zones that will not start, heads that stick or leak, and brown patches that keep coming back.',
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
        q: 'My neighborhood was built in the 1980s or 1990s. Is my system likely to need work?',
        a: 'If the system is original, it is probably worth an inspection. Worn valves, brittle fittings, and misaligned heads are common at that age, and catching them early costs less than waiting for a failure.',
      },
      {
        q: 'Should I upgrade the builder-installed sprinkler system in my newer home?',
        a: 'Often a partial upgrade is enough. Replacing worn heads, adding a smart controller, and fixing zone coverage gives many homeowners most of the benefit without a full rebuild.',
      },
      {
        q: 'Does clay soil affect my sprinklers?',
        a: 'Yes. Clay holds water and drains slowly, so long runs can cause runoff, while soil movement can crack lines. We set shorter, split run times where it helps and repair any damage from shifting soil.',
      },
      {
        q: 'How do I schedule service in the Miller Road area?',
        a: 'Call (972) 755-9019 or use Book Now. We are licensed in Texas (License #8146) and provide a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/miller-road-area.jpeg`,
    img1Alt: 'Miller Road area of Rowlett Texas',
    img2: `${IMG_DIR}/miller-road-area.jpeg`,
    img2Alt: 'Irrigation service in the Miller Road area of Rowlett Texas',
  },

  {
    slug: 'lakeside-area',
    name: 'Lakeside Area',
    display: 'Lakeside Area',
    seoTitle: 'Lakeside Rowlett Sprinkler Repair',
    metaDescription:
      'Sprinkler repair and irrigation in the Lakeside area of Rowlett, TX. Lake Ray Hubbard frontage, wind exposure, varied soils. License #8146. (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, drainage-aware irrigation, and head replacement in the Lakeside area of Rowlett, where Lake Ray Hubbard frontage, wind exposure, and varied soils shape every yard.',
    introEm: 'Lakeside Area Homeowners',
    intro: [
      'The Lakeside area of Rowlett sits near Lake Ray Hubbard, with lakefront properties, established neighborhoods, and newer developments along the shoreline. Wind, sun exposure, and clay soil all affect how water should be applied, and yards near the lake behave differently from inland yards. Sprinklers and Lawns has served Rowlett for over 25 years, with Texas license #8146 and horticulture training from Texas A&M behind every job.',
      'Lake-adjacent yards need irrigation that accounts for wind, drainage, and sun exposure. We design and tune irrigation to match the land, not just the lawn.',
    ],
    highlights: [
      'The Lakeside area sits near Lake Ray Hubbard, with lakefront properties and established neighborhoods',
      'Lakefront exposure brings wind and sun conditions that affect each zone',
      'Sloped or low-lying areas drain differently, so shorter, split run times often work better',
      'Heavy clay soil holds water and drains slowly, so cycle-and-soak run times matter',
      'Matched nozzles and precise head placement keep overspray off sidewalks, fences, and natural areas',
    ],
    issuesTitle: 'Irrigation issues in the Lakeside area',
    issues: [
      {
        t: 'Wind and sun exposure near the lake',
        d: 'Open lots near the lake get hard sun and steady wind, which dry turf faster. Running every zone on the same schedule wastes water and stresses grass. Zone tuning and smart controllers solve this.',
      },
      {
        t: 'Drainage and runoff',
        d: 'Sloped or low-lying areas drain differently, so long runs can cause runoff or pooling. Cycle-and-soak run times and matched nozzles help water reach the roots.',
      },
      {
        t: 'Aging systems',
        d: 'Homes built decades ago may still have original or heavily patched irrigation. Worn valves, cracked fittings, and clogged heads lead to uneven coverage.',
      },
      {
        t: 'Overspray on hardscape',
        d: 'Tight lots and lake-adjacent paving mean misdirected heads soak walkways. Realigning heads and switching to matched nozzles keeps water on the lawn.',
      },
    ],
    faqs: [
      {
        q: 'Does living near Lake Ray Hubbard change how I should water?',
        a: 'It can. Wind and sun exposure near the lake dry turf faster, and local drainage can vary. We set zones based on how each area drains and how much sun it gets.',
      },
      {
        q: 'Can you fix sprinkler heads that keep getting damaged or tilted?',
        a: 'Yes. We replace damaged heads, reset those that have shifted, and look for the cause, such as roots, soil movement, or poor placement, so the problem does not keep returning.',
      },
      {
        q: 'How do I keep irrigation from over-saturating a slope?',
        a: 'Use the right nozzles, split run times, and a controller that responds to the weather. We can set this up and adjust it through the seasons.',
      },
      {
        q: 'How do I schedule service in the Lakeside area?',
        a: 'Call (972) 755-9019 or use Book Now. We hold Texas irrigation license #8146 and offer a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/lakeside-area.jpg`,
    img1Alt: 'Lakeside area of Rowlett Texas',
    img2: `${IMG_DIR}/lakeside-area.jpg`,
    img2Alt: 'Sprinkler service in the Lakeside area of Rowlett Texas',
  },

  {
    slug: 'firewheel-border-area',
    name: 'Firewheel Border Area',
    display: 'Firewheel Border Area',
    seoTitle: 'Firewheel Border Area Rowlett Sprinkler Repair',
    metaDescription:
      'Sprinkler repair and irrigation in the Firewheel border area of Rowlett, TX. Established neighborhoods, master-planned edges, varied systems. License #8146. (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, installation, and smart controller upgrades in the Firewheel border area of Rowlett, where the city meets the Firewheel community and established neighborhoods share a mix of irrigation needs.',
    introEm: 'Firewheel Border Area Homeowners',
    intro: [
      'The Firewheel border area sits on Rowlett’s northwest edge, where the city meets the Firewheel community and the Bush Turnpike corridor. Housing stock here ranges from 1990s and 2000s subdivisions to newer developments, and irrigation systems vary from original builder installs to recent upgrades. Sprinklers and Lawns has served Rowlett for over 25 years, with Texas license #8146 and horticulture training from Texas A&M behind every job.',
      'Older homes often have irrigation that has been extended or patched over the years, while newer homes may have builder-grade systems that benefit from upgrades. We look at the zones, the soil, and the landscape before recommending repairs or upgrades, so the system fits the yard.',
    ],
    highlights: [
      'The Firewheel border area sits on Rowlett’s northwest edge, near the Firewheel community and the Bush Turnpike',
      'Housing stock ranges from 1990s and 2000s subdivisions to newer developments',
      'Older systems often need updates; newer builder-grade systems benefit from smart controllers and better zoning',
      'Neighborhood HOAs often set landscape standards, so a healthy, even lawn matters',
      'Heavy clay soil holds water and drains slowly, so cycle-and-soak run times matter',
    ],
    issuesTitle: 'Irrigation issues in the Firewheel border area',
    issues: [
      {
        t: 'Older systems reaching the end of their life',
        d: 'Valves, wiring, and heads installed in the 1990s and 2000s wear out. Symptoms include zones that will not start, heads that stick or leak, and brown patches that keep coming back.',
      },
      {
        t: 'Builder-grade systems',
        d: 'Systems installed at construction are often designed to be functional rather than ideal. Adding a smart controller, adjusting nozzles, and rebalancing zones improves coverage and cuts water use.',
      },
      {
        t: 'HOA lawn standards',
        d: 'When the neighborhood expects a green, even lawn, small coverage gaps stand out. Proper head spacing, matched nozzles, and the right run times keep turf looking consistent without overwatering.',
      },
      {
        t: 'Runoff on clay soil',
        d: 'Clay holds water and drains slowly, so long runs cause runoff. Cycle-and-soak run times and matched nozzles let water soak in.',
      },
    ],
    faqs: [
      {
        q: 'My neighborhood was built in the 1990s or 2000s. Is my system likely to need work?',
        a: 'If the system is original, it is probably worth an inspection. Worn valves, brittle fittings, and misaligned heads are common at that age, and catching them early costs less than waiting for a failure.',
      },
      {
        q: 'Should I upgrade the builder-installed sprinkler system in my newer home?',
        a: 'Often a partial upgrade is enough. Replacing worn heads, adding a smart controller, and fixing zone coverage gives many homeowners most of the benefit without a full rebuild.',
      },
      {
        q: 'Can you help my lawn meet HOA expectations?',
        a: 'A properly working irrigation system is the foundation of a healthy lawn. We can fix coverage problems, adjust schedules for sun and shade, and upgrade to a smart controller. For specific HOA rules, check with your association, and we will work within them.',
      },
      {
        q: 'How do I schedule service in the Firewheel border area?',
        a: 'Call (972) 755-9019 or use Book Now. We are licensed in Texas (License #8146) and provide a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/firewheel-border-area.jpg`,
    img1Alt: 'Firewheel border area of Rowlett Texas',
    img2: `${IMG_DIR}/firewheel-border-area.jpg`,
    img2Alt: 'Irrigation service in the Firewheel border area of Rowlett Texas',
  },

  {
    slug: 'princeton-area',
    name: 'Princeton Area',
    display: 'Princeton Area',
    seoTitle: 'Princeton Area Rowlett Sprinkler Repair',
    metaDescription:
      'Sprinkler repair and irrigation in the Princeton area of Rowlett, TX. Established homes, newer builds, varied systems. License #8146. (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, installation, and smart controller upgrades in the Princeton area of Rowlett, where established neighborhoods and newer developments share a mix of irrigation needs.',
    introEm: 'Princeton Area Homeowners',
    intro: [
      'The Princeton area sits on Rowlett’s northeast edge, near the Princeton and Lavon corridor, with a mix of established neighborhoods, newer subdivisions, and rural-adjacent properties. Irrigation systems here vary from original builder installs to recent upgrades, and property sizes range from standard lots to larger parcels. Sprinklers and Lawns has served Rowlett for over 25 years, with Texas license #8146 and horticulture training from Texas A&M behind every job.',
      'Older homes often have irrigation that has been extended or patched over the years, while newer homes may have builder-grade systems that benefit from upgrades. We look at the zones, the soil, and the landscape before recommending repairs or upgrades, so the system fits the yard.',
    ],
    highlights: [
      'The Princeton area sits on Rowlett’s northeast edge, near the Princeton and Lavon corridor',
      'Housing stock includes established neighborhoods, newer subdivisions, and rural-adjacent properties',
      'Larger parcels and varied lot sizes call for zone-by-zone programming and careful head placement',
      'Older systems often need updates; newer builder-grade systems benefit from smart controllers and better zoning',
      'Heavy clay soil holds water and drains slowly, so cycle-and-soak run times matter',
    ],
    issuesTitle: 'Irrigation issues in the Princeton area',
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
        t: 'Larger lots and varied property sizes',
        d: 'Bigger parcels and rural-adjacent properties can have long runs and mixed plant material. Zone tuning and matched nozzles keep water even and water use down.',
      },
      {
        t: 'Runoff on clay soil',
        d: 'Clay holds water and drains slowly, so long runs cause runoff. Cycle-and-soak run times and matched nozzles let water soak in.',
      },
    ],
    faqs: [
      {
        q: 'Do you service larger lots and rural-adjacent properties in the Princeton area?',
        a: 'Yes. We work on standard lots, larger parcels, and rural-adjacent properties, with irrigation systems sized and programmed to match each.',
      },
      {
        q: 'Should I upgrade the builder-installed sprinkler system in my newer home?',
        a: 'Often a partial upgrade is enough. Replacing worn heads, adding a smart controller, and fixing zone coverage gives many homeowners most of the benefit without a full rebuild.',
      },
      {
        q: 'Does clay soil affect my sprinklers?',
        a: 'Yes. Clay holds water and drains slowly, so long runs can cause runoff, while soil movement can crack lines. We set shorter, split run times where it helps and repair any damage from shifting soil.',
      },
      {
        q: 'How do I schedule service in the Princeton area?',
        a: 'Call (972) 755-9019 or use Book Now. We are licensed in Texas (License #8146) and provide a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/princeton-area.jpg`,
    img1Alt: 'Princeton area of Rowlett Texas',
    img2: `${IMG_DIR}/princeton-area.jpg`,
    img2Alt: 'Irrigation service in the Princeton area of Rowlett Texas',
  },
];

export function getNeighborhood(slug) {
  return neighborhoods.find((n) => n.slug === slug) || null;
}