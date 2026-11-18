// Content for the 8 Irving neighborhood pages.
// One entry = one page at /service-areas/irving/<slug>

const IMG_DIR = '/images/serviceareas/irving-neighborhoods';

export const neighborhoods = [
  {
    slug: 'las-colinas',
    name: 'Las Colinas',
    display: 'Las Colinas',
    seoTitle: 'Las Colinas Irving Sprinkler Repair',
    metaDescription:
      'Sprinkler repair, installation, and smart irrigation for Las Colinas in Irving, TX. Master-planned community, commercial and residential. License #8146. Call (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, irrigation installation, and smart controller upgrades in Las Colinas, Irving’s master-planned urban center, for homes, offices, and mixed-use properties.',
    introEm: 'Las Colinas Homeowners and Property Managers',
    intro: [
      'Las Colinas is a master-planned development in Irving, roughly centered on the Las Colinas Urban Center, with office towers, residential neighborhoods, the Mandalay Canal, and the Mustangs of Las Colinas sculpture. It is one of the most recognizable business and residential addresses in the metroplex, and its landscaping is held to a high standard. Sprinklers and Lawns has served Irving for over 25 years, with Texas license #8146 and horticulture training from Texas A&M behind every job.',
      'Irrigation in Las Colinas has to serve both homes and commercial properties, often with complex, multi-zone systems, drip for beds and planters, and controllers that respond to weather and season. We repair, tune, and upgrade these systems so landscaping stays healthy and water use stays efficient.',
    ],
    highlights: [
      'Las Colinas is a master-planned development in Irving with residential, office, and mixed-use properties',
      'Commercial and multifamily properties often have many zones and need regular inspection and programming',
      'Landscaping is held to a high standard, so coverage and head alignment matter',
      'Drip irrigation for beds and planters often runs alongside spray and rotor zones for turf',
      'Smart controllers and sensors help control water costs on larger properties',
    ],
    issuesTitle: 'Irrigation issues Las Colinas properties often face',
    issues: [
      {
        t: 'Large, multi-zone systems',
        d: 'Commercial grounds and apartment communities can have dozens of zones. One failed valve or broken head can go unnoticed for weeks without regular inspection.',
      },
      {
        t: 'Overspray on pavement and structures',
        d: 'Sprinklers that spray sidewalks, parking areas, and building walls waste water and create hazards. Re-aiming heads and updating nozzles keeps water where plants need it.',
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
        q: 'Do you service commercial and multifamily properties in Las Colinas?',
        a: 'Yes. We offer commercial irrigation services as well as residential service. Call us to discuss your property and schedule an assessment.',
      },
      {
        q: 'Can you set up seasonal maintenance for a property manager?',
        a: 'Yes. Seasonal maintenance includes scheduled inspections and programming adjustments throughout the year, which helps catch problems early and keeps water use under control.',
      },
      {
        q: 'How do you reduce water waste on large properties?',
        a: 'We repair leaks and broken heads, update nozzles and head placement, and program smart controllers with rain and freeze sensors so zones run only when needed.',
      },
      {
        q: 'How do I schedule service in Las Colinas?',
        a: 'Call (972) 755-9019 or use Book Now. We are licensed in Texas (License #8146) and back our work with a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/los-colinas.jpg`,
    img1Alt: 'Las Colinas in Irving Texas',
    img2: `${IMG_DIR}/los-colinas.jpg`,
    img2Alt: 'Irrigation service in Las Colinas Irving Texas',
  },

  {
    slug: 'valley-ranch',
    name: 'Valley Ranch',
    display: 'Valley Ranch',
    seoTitle: 'Valley Ranch Irving Sprinkler Repair',
    metaDescription:
      'Sprinkler repair and irrigation for Valley Ranch homes in Irving, TX. Master-planned neighborhood, HOA lawns, greenbelt. License #8146. Call (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, irrigation installation, and smart controller upgrades in Valley Ranch, a master-planned community in north Irving along the Bush Turnpike corridor.',
    introEm: 'Valley Ranch Homeowners',
    intro: [
      'Valley Ranch is a master-planned community in north Irving, developed mainly from the 1980s onward, with neighborhood parks, greenbelts, and HOA-managed landscaping. Homes here range from established sections to newer phases, and irrigation systems reflect that range, from original installs to recent upgrades. Sprinklers and Lawns has served Irving for over 25 years, with Texas license #8146 and horticulture training from Texas A&M behind every job.',
      'In a neighborhood where lawns and landscaping are on show, we focus on efficient coverage, smart scheduling, and dependable repairs so your irrigation works the way the community expects it to.',
    ],
    highlights: [
      'Valley Ranch is a master-planned community in north Irving, developed from the 1980s onward',
      'Homes range from established sections to newer phases, so irrigation age and design vary street by street',
      'Neighborhood HOAs often set landscape standards, so a healthy, even lawn matters',
      'Greenbelts, parks, and community landscaping call for consistent schedules and reliable coverage',
      'Builder-installed systems are often designed to minimum standards and benefit from smart controllers and better zoning',
    ],
    issuesTitle: 'Irrigation issues Valley Ranch homes often face',
    issues: [
      {
        t: 'Original systems in 1980s and 1990s homes',
        d: 'Valves, wiring, and heads installed decades ago wear out. Symptoms include zones that will not start, heads that stick or leak, and brown patches that keep coming back.',
      },
      {
        t: 'HOA lawn standards',
        d: 'When the neighborhood expects a green, even lawn, small coverage gaps stand out. Proper head spacing, matched nozzles, and the right run times keep turf looking consistent without overwatering.',
      },
      {
        t: 'Builder-grade systems',
        d: 'Systems installed at construction are often designed to be functional rather than ideal. Adding a smart controller, adjusting nozzles, and rebalancing zones improves coverage and cuts water use.',
      },
      {
        t: 'Mixed sun and shade',
        d: 'Open lots and tree-covered yards need different schedules. Running every zone on the same schedule wastes water and stresses grass. Zone tuning and smart controllers solve this.',
      },
    ],
    faqs: [
      {
        q: 'My sprinkler system is original to the house. Should I replace it?',
        a: 'Not necessarily. We inspect the system first. If the main lines and valves are sound, replacing worn heads, nozzles, and the controller can extend its life considerably. If lines are failing in several places, we will explain when replacement makes more sense.',
      },
      {
        q: 'Can you help my lawn meet HOA expectations?',
        a: 'A properly working irrigation system is the foundation of a healthy lawn. We can fix coverage problems, adjust schedules for sun and shade, and upgrade to a smart controller. For specific HOA rules, check with your association, and we will work within them.',
      },
      {
        q: 'Do smart controllers make sense for Valley Ranch homes?',
        a: 'For many yards, yes. Weather-based controllers adjust run times automatically, which helps in a climate with hot summers and sudden rain. They are especially useful on larger lots with mixed sun and shade.',
      },
      {
        q: 'How do I schedule irrigation service in Valley Ranch?',
        a: 'Call (972) 755-9019 or book online. We are licensed in Texas (License #8146) and back our work with a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/valley-ranch.jpg`,
    img1Alt: 'Valley Ranch neighborhood in Irving Texas',
    img2: `${IMG_DIR}/valley-ranch.jpg`,
    img2Alt: 'Lawn and irrigation in Valley Ranch Irving Texas',
  },

  {
    slug: 'coppell-border-area',
    name: 'Coppell Border Area',
    display: 'Coppell Border Area',
    seoTitle: 'Coppell Border Area Irving Sprinkler Repair',
    metaDescription:
      'Sprinkler repair and irrigation service in the Coppell border area of Irving, TX. Established homes, newer builds, varied systems. License #8146. Call (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, head replacement, and irrigation upgrades in the Coppell border area of Irving, where established neighborhoods and newer builds share a mix of irrigation needs.',
    introEm: 'Coppell Border Area Homeowners',
    intro: [
      'The Coppell border area runs along Irving’s northwest edge, where the city meets Coppell and the Bush Turnpike corridor. Housing stock here ranges from 1980s and 1990s subdivisions to newer developments, and irrigation systems vary from original builder installs to recent upgrades. Sprinklers and Lawns has served Irving for over 25 years, with Texas license #8146 and horticulture training from Texas A&M behind every job.',
      'Older homes often have irrigation that has been extended or patched over the years, while newer homes may have builder-grade systems that benefit from upgrades. We look at the zones, the soil, and the landscape before recommending repairs or upgrades, so the system fits the yard.',
    ],
    highlights: [
      'The Coppell border area runs along Irving’s northwest edge, near Coppell and the Bush Turnpike',
      'Housing stock ranges from 1980s and 1990s subdivisions to newer developments',
      'Older systems often need updates; newer builder-grade systems benefit from smart controllers and better zoning',
      'Heavy clay soil holds water and drains slowly, so cycle-and-soak run times matter',
      'Mature trees in older sections and newer plantings in others call for zone-by-zone programming',
    ],
    issuesTitle: 'Irrigation issues in the Coppell border area',
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
        q: 'My neighborhood was built in the 1980s. Is my system likely to need work?',
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
        q: 'How do I schedule service in the Coppell border area?',
        a: 'Call (972) 755-9019 or use Book Now. We are licensed in Texas (License #8146) and provide a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/coppell-border-area.jpg`,
    img1Alt: 'Coppell border area of Irving Texas',
    img2: `${IMG_DIR}/coppell-border-area.jpg`,
    img2Alt: 'Irrigation service in the Coppell border area of Irving Texas',
  },

  {
    slug: 'macarthur-blvd-corridor',
    name: 'MacArthur Blvd Corridor',
    display: 'MacArthur Blvd Corridor',
    seoTitle: 'MacArthur Blvd Irving Sprinkler Repair',
    metaDescription:
      'Sprinkler repair and irrigation along the MacArthur Blvd corridor in Irving, TX. Homes, apartments, retail, offices. License #8146. Call (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, installation, and seasonal irrigation along the MacArthur Blvd corridor in Irving, from established neighborhoods to apartment communities and retail centers.',
    introEm: 'MacArthur Blvd Corridor Properties',
    intro: [
      'MacArthur Blvd runs north to south through Irving, linking neighborhoods, apartment communities, shopping centers, and office properties, and crossing near the Las Colinas business district. Homes along the corridor range from mid-century subdivisions to newer builds, and commercial properties include apartment complexes, retail, and office landscaping. Sprinklers and Lawns has served Irving for over 25 years, with Texas license #8146 and horticulture training from Texas A&M behind every job.',
      'That mix means irrigation needs range from a single home lawn to large commercial grounds. We handle both small repairs and larger commercial zones, with clear communication on every job.',
    ],
    highlights: [
      'MacArthur Blvd runs north to south through Irving, crossing near the Las Colinas business district',
      'The corridor includes established neighborhoods, apartment communities, retail, and office properties',
      'Commercial and multifamily properties often have many zones and need regular inspection and programming',
      'Frontage landscaping along a busy road shows problems quickly, so reliable coverage matters',
      'HOA and property manager accounts benefit from regular seasonal inspections and clear communication',
    ],
    issuesTitle: 'Irrigation issues along the MacArthur Blvd corridor',
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
        q: 'Do you service commercial and apartment properties along MacArthur Blvd?',
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
        q: 'How do I schedule service along MacArthur Blvd?',
        a: 'Call (972) 755-9019 or use Book Now. We are licensed in Texas (License #8146) and back our work with a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/macarthur-blvd-corridor.jpg`,
    img1Alt: 'MacArthur Blvd corridor in Irving Texas',
    img2: `${IMG_DIR}/macarthur-blvd-corridor.jpg`,
    img2Alt: 'Irrigation service along MacArthur Blvd in Irving Texas',
  },

  {
    slug: 'belt-line-road-area',
    name: 'Belt Line Road Area',
    display: 'Belt Line Road Area',
    seoTitle: 'Belt Line Road Irving Sprinkler Repair',
    metaDescription:
      'Sprinkler repair and irrigation in the Belt Line Road area of Irving, TX. Established homes, commercial properties, mixed-use. License #8146. (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, installation, and seasonal irrigation in the Belt Line Road area of Irving, where established neighborhoods and commercial properties share a mix of irrigation needs.',
    introEm: 'Belt Line Road Area Properties',
    intro: [
      'Belt Line Road runs east to west across Irving, connecting neighborhoods, shopping centers, and office properties. The area around the corridor includes established subdivisions, apartment communities, and retail centers, and irrigation needs vary widely from single-family lawns to commercial landscaping. Sprinklers and Lawns has served Irving for over 25 years, with Texas license #8146 and horticulture training from Texas A&M behind every job.',
      'Older homes often have irrigation that has been extended or patched over the years, while commercial properties need reliable, multi-zone systems with clear scheduling and regular inspection. We handle both, with clear communication on every job.',
    ],
    highlights: [
      'Belt Line Road runs east to west across Irving, connecting neighborhoods and commercial areas',
      'The corridor includes established subdivisions, apartment communities, and retail centers',
      'Older residential systems often need updates; commercial properties need regular inspection and programming',
      'Frontage landscaping along a busy road shows problems quickly, so reliable coverage matters',
      'HOA and property manager accounts benefit from regular seasonal inspections and clear communication',
    ],
    issuesTitle: 'Irrigation issues in the Belt Line Road area',
    issues: [
      {
        t: 'Aging residential systems',
        d: 'Subdivisions built decades ago often still have original valves, wiring, and heads. Failures show up as zones that will not run, leaks, and uneven coverage.',
      },
      {
        t: 'Retail and apartment landscaping',
        d: 'Shopping centers and apartment communities use many zones, and damage from mowers and traffic is common. Regular inspections keep landscaping looking its best.',
      },
      {
        t: 'Wasted water on frontage',
        d: 'Overspray onto sidewalks and the road wastes water and money. Proper head placement and nozzles keep water on the plants.',
      },
      {
        t: 'Controllers that ignore the weather',
        d: 'A basic timer waters in the rain. Smart controllers with rain and freeze sensors cut waste and protect plants during freezes.',
      },
    ],
    faqs: [
      {
        q: 'Do you serve both homes and businesses in the Belt Line Road area?',
        a: 'Yes. We work with homeowners, HOAs, and property managers, including commercial and multifamily properties.',
      },
      {
        q: 'My neighborhood was built decades ago. Is my system likely to need work?',
        a: 'If the system is original, it is probably worth an inspection. Worn valves, brittle fittings, and misaligned heads are common at that age, and catching them early costs less than waiting for a failure.',
      },
      {
        q: 'Can you set up regular maintenance for a shopping center or apartment community?',
        a: 'Yes. Seasonal maintenance includes scheduled inspections and programming adjustments throughout the year.',
      },
      {
        q: 'How do I schedule service in the Belt Line Road area?',
        a: 'Call (972) 755-9019 or use Book Now. We hold Texas irrigation license #8146 and provide a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/belt-line-road-area.jpg`,
    img1Alt: 'Belt Line Road area of Irving Texas',
    img2: `${IMG_DIR}/belt-line-road-area.jpg`,
    img2Alt: 'Irrigation service in the Belt Line Road area of Irving Texas',
  },

  {
    slug: 'story-road-area',
    name: 'Story Road Area',
    display: 'Story Road Area',
    seoTitle: 'Story Road Irving Sprinkler Repair',
    metaDescription:
      'Sprinkler repair and irrigation service in the Story Road area of Irving, TX. Established homes, mature trees, older systems. License #8146. (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, head replacement, and irrigation upgrades in the Story Road area of Irving, where established homes and mature trees shape every yard.',
    introEm: 'Story Road Area Homeowners',
    intro: [
      'The Story Road area sits in south Irving, with a mix of established neighborhoods, mature trees, and older housing stock. Many homes here were built in the mid-20th century, and irrigation systems often predate today’s smart controllers and sensor requirements. Sprinklers and Lawns has served Irving for over 25 years, with Texas license #8146 and horticulture training from Texas A&M behind every job.',
      'Older systems bring their own puzzles: mature trees, lots that were never laid out for a modern sprinkler system, and irrigation that has been repaired, extended, or partly replaced over the years. We start with a careful look at what is already in the ground, then repair what works, replace what does not, and program the system to match the lawn, the shade, and the soil.',
    ],
    highlights: [
      'The Story Road area is in south Irving, with a mix of established neighborhoods and older housing stock',
      'Many homes were built in the mid-20th century, so irrigation systems may predate current sensor requirements',
      'Mature shade trees are common, so root growth and heavy shade shape how each zone is designed',
      'Older systems may have been patched or extended by several owners over the years',
      'Walkable streets and sidewalks make overspray control important',
    ],
    issuesTitle: 'Irrigation issues in the Story Road area',
    issues: [
      {
        t: 'Tree roots and aging lines',
        d: 'Large established trees send roots toward water. Over time roots can crush or shift lateral lines and tilt sprinkler heads, which causes leaks, dry patches, and soggy spots.',
      },
      {
        t: 'Systems that grew over time',
        d: 'Many older irrigation systems have been patched or extended by several owners. Mismatched heads, mixed pipe, and unlabeled zones lead to uneven watering and wasted water.',
      },
      {
        t: 'Missing or outdated controls',
        d: 'Older controllers run fixed schedules that ignore the weather. Adding a smart controller and rain and freeze sensors helps keep water use in check and meet current requirements.',
      },
      {
        t: 'Overspray on hardscape',
        d: 'Tight lots, sidewalks, and older fences mean misdirected heads soak places they should not. Realigning heads or switching to the right nozzles keeps water on the lawn.',
      },
    ],
    faqs: [
      {
        q: 'Can you work on an older sprinkler system in the Story Road area?',
        a: 'Yes. Repairing and upgrading existing systems is a core part of what we do. We check the zones, valves, wiring, and heads, explain what needs attention, and give you options before any work begins.',
      },
      {
        q: 'Do mature trees affect my irrigation?',
        a: 'They can. Roots can damage lines and heads, and shade changes how much water a lawn needs. We adjust zone layouts and run times for shaded and sunny areas, and we can reroute or replace lines that roots have damaged.',
      },
      {
        q: 'Can an old system be upgraded instead of replaced?',
        a: 'Often, yes. If the main lines and valves are in good shape, upgrading heads, nozzles, the controller, and sensors can improve coverage and cut water use at a fraction of the cost of a full replacement. If a system is beyond repair, we will tell you honestly.',
      },
      {
        q: 'How do I schedule service in the Story Road area?',
        a: 'Call (972) 755-9019 or use Book Now. Sprinklers and Lawns is licensed in Texas (License #8146), and our work carries a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/story-road-area.webp`,
    img1Alt: 'Story Road area of Irving Texas',
    img2: `${IMG_DIR}/story-road-area.webp`,
    img2Alt: 'Sprinkler system service in the Story Road area of Irving Texas',
  },

  {
    slug: 'north-irving',
    name: 'North Irving',
    display: 'North Irving',
    seoTitle: 'North Irving Sprinkler Repair',
    metaDescription:
      'Sprinkler repair, installation, and smart irrigation for North Irving homes, TX. Established neighborhoods, newer builds. License #8146. Call (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, irrigation installation, and smart controller upgrades in North Irving, from established mid-century neighborhoods to newer developments near Valley Ranch and Las Colinas.',
    introEm: 'North Irving Homeowners',
    intro: [
      'North Irving stretches from the LBJ Freeway north toward Valley Ranch and the Bush Turnpike, including established subdivisions, newer developments, and the commercial corridors along MacArthur and Belt Line. Housing stock ranges from mid-century ranches to newer builds, and irrigation systems here reflect that range. Sprinklers and Lawns has served Irving for over 25 years, with Texas license #8146 and horticulture training from Texas A&M behind every job.',
      'Older homes often have irrigation that has been extended or patched over the years, while newer homes may have builder-grade systems that benefit from upgrades. We look at the zones, the soil, and the landscape before recommending repairs or upgrades, so the system fits the yard.',
    ],
    highlights: [
      'North Irving stretches from the LBJ Freeway north toward Valley Ranch and the Bush Turnpike',
      'Housing stock ranges from mid-century ranches to newer builds, so irrigation age varies street by street',
      'Builder-grade systems in newer homes often benefit from smart controllers and better zoning',
      'Heavy clay soil holds water and drains slowly, so cycle-and-soak run times matter',
      'Mature trees in older sections and newer plantings in others call for zone-by-zone programming',
    ],
    issuesTitle: 'Irrigation issues North Irving homes often face',
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
        q: 'Do smart controllers make sense for North Irving homes?',
        a: 'For many yards, yes. Weather-based controllers adjust run times automatically, which helps in a climate with hot summers and sudden rain. They are especially useful on larger lots with mixed sun and shade.',
      },
      {
        q: 'How do I schedule irrigation service in North Irving?',
        a: 'Call (972) 755-9019 or book online. We are licensed in Texas (License #8146) and back our work with a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/north-irving.jpg`,
    img1Alt: 'North Irving neighborhood in Irving Texas',
    img2: `${IMG_DIR}/north-irving.jpg`,
    img2Alt: 'Lawn and irrigation in North Irving Texas',
  },

  {
    slug: 'south-irving',
    name: 'South Irving',
    display: 'South Irving',
    seoTitle: 'South Irving Sprinkler Repair',
    metaDescription:
      'Sprinkler repair and irrigation for South Irving homes, TX. Historic neighborhoods, mature trees, older systems. License #8146. Call (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, head replacement, and irrigation upgrades in South Irving, where historic neighborhoods, mature trees, and older homes shape every yard.',
    introEm: 'South Irving Homeowners',
    intro: [
      'South Irving sits below the LBJ Freeway and includes historic neighborhoods such as the Irving Heritage District, along with older subdivisions, mature trees, and a mix of mid-century and early-1900s homes. Many irrigation systems here are decades old, and some predate today’s smart controllers and sensor requirements. Sprinklers and Lawns has served Irving for over 25 years, with Texas license #8146 and horticulture training from Texas A&M behind every job.',
      'Older systems bring their own puzzles: mature trees, lots that were never laid out for a modern sprinkler system, and irrigation that has been repaired, extended, or partly replaced over the years. We start with a careful look at what is already in the ground, then repair what works, replace what does not, and program the system to match the lawn, the shade, and the soil.',
    ],
    highlights: [
      'South Irving sits below the LBJ Freeway, including the Irving Heritage District and older neighborhoods',
      'Many homes date from the mid-20th century or earlier, so irrigation systems may be decades old',
      'Mature shade trees are common, so root growth and heavy shade shape how each zone is designed',
      'Older systems may have been patched or extended by several owners over the years',
      'Walkable streets and historic hardscape make overspray control important',
    ],
    issuesTitle: 'Irrigation issues South Irving homes often face',
    issues: [
      {
        t: 'Tree roots and aging lines',
        d: 'Large established trees send roots toward water. Over time roots can crush or shift lateral lines and tilt sprinkler heads, which causes leaks, dry patches, and soggy spots.',
      },
      {
        t: 'Systems that grew over time',
        d: 'Many older irrigation systems have been patched or extended by several owners. Mismatched heads, mixed pipe, and unlabeled zones lead to uneven watering and wasted water.',
      },
      {
        t: 'Missing or outdated controls',
        d: 'Older controllers run fixed schedules that ignore the weather. Adding a smart controller and rain and freeze sensors helps keep water use in check and meet current requirements.',
      },
      {
        t: 'Overspray on hardscape',
        d: 'Tight lots, sidewalks, and historic brick mean misdirected heads soak places they should not. Realigning heads or switching to the right nozzles keeps water on the lawn.',
      },
    ],
    faqs: [
      {
        q: 'Can you work on an older sprinkler system in South Irving?',
        a: 'Yes. Repairing and upgrading existing systems is a core part of what we do. We check the zones, valves, wiring, and heads, explain what needs attention, and give you options before any work begins.',
      },
      {
        q: 'Do mature trees affect my irrigation?',
        a: 'They can. Roots can damage lines and heads, and shade changes how much water a lawn needs. We adjust zone layouts and run times for shaded and sunny areas, and we can reroute or replace lines that roots have damaged.',
      },
      {
        q: 'Can an old system be upgraded instead of replaced?',
        a: 'Often, yes. If the main lines and valves are in good shape, upgrading heads, nozzles, the controller, and sensors can improve coverage and cut water use at a fraction of the cost of a full replacement. If a system is beyond repair, we will tell you honestly.',
      },
      {
        q: 'How do I schedule service in South Irving?',
        a: 'Call (972) 755-9019 or use Book Now. Sprinklers and Lawns is licensed in Texas (License #8146), and our work carries a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/south-irving.webp`,
    img1Alt: 'South Irving neighborhood in Irving Texas',
    img2: `${IMG_DIR}/south-irving.webp`,
    img2Alt: 'Sprinkler system service in South Irving Texas',
  },
];

export function getNeighborhood(slug) {
  return neighborhoods.find((n) => n.slug === slug) || null;
}