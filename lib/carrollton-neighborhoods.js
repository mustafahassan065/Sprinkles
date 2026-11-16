// Content for the 8 Carrollton neighborhood pages.
// One entry = one page at /service-areas/carrollton/<slug>
//
// IMAGES: add 2 files per neighborhood (WebP, compressed) in
// public/images/serviceareas/carrollton-neighborhoods/
// and keep the exact file names below (or change the paths here).
// Update the img1Alt / img2Alt text so it describes the real photo you upload.

const IMG_DIR = '/images/serviceareas/carrollton-neighborhoods';

export const neighborhoods = [
  {
    slug: 'old-town-carrollton',
    name: 'Old Town Carrollton',
    display: 'Old Town Carrollton',
    seoTitle: 'Old Town Carrollton Sprinkler Repair',
    metaDescription:
      'Sprinkler repair, installation, and irrigation service in Old Town Carrollton, TX. Older systems, mature trees, historic lots. License #8146. Call (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, installation, and seasonal irrigation service in Old Town Carrollton, Texas. From historic streets near the downtown square to newer infill homes, we keep lawns and landscaping healthy and water-efficient.',
    introEm: 'Old Town Carrollton Homeowners',
    intro: [
      'Old Town Carrollton is the historic heart of the city. The downtown square grew up around the railroad in the late 1800s, and the streets around it hold some of Carrollton’s oldest homes, with newer infill houses mixed in. Sprinklers and Lawns has provided irrigation services to Carrollton, Texas homeowners and property managers for over 25 years, and Joe Davis, who earned a Bachelor of Science in Horticulture from Texas A&M in 1989, brings that experience to every Old Town job.',
      'Older streets bring their own irrigation puzzles: mature trees, lots that were never laid out for a modern sprinkler system, and systems that have been repaired, extended, or partly replaced over the years. We start with a careful look at what is already in the ground, then repair what works, replace what does not, and program the system to match the lawn, the shade, and the soil.',
    ],
    highlights: [
      'The Old Downtown Square and the historic streets around it are among the oldest parts of Carrollton',
      'Mature shade trees are common, so root growth and heavy shade shape how each zone is designed',
      'Older homes may have irrigation that predates today’s rain and freeze sensor requirements',
      'Older and newer homes sit side by side, so one block can have very different irrigation needs',
      'Walkable streets and sidewalks make overspray control important to keep water off pavement and masonry',
    ],
    issuesTitle: 'Irrigation issues older Old Town properties often face',
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
        d: 'Tight lots, sidewalks, brick, and older fences mean misdirected heads soak places they should not. Realigning heads or switching to the right nozzles keeps water on the lawn.',
      },
    ],
    faqs: [
      {
        q: 'Can you work on an older sprinkler system in Old Town Carrollton?',
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
        q: 'How do I schedule service in Old Town Carrollton?',
        a: 'Call (972) 755-9019 or use the Book Now button. Sprinklers and Lawns is licensed in Texas (License #8146), and our work carries a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/old-town.jpg`,
    img1Alt: 'Old Town Carrollton Texas neighborhood',
    img2: `${IMG_DIR}/old-town.jpg`,
    img2Alt: 'Sprinkler system service in Old Town Carrollton Texas',
  },

  {
    slug: 'indian-creek',
    name: 'Indian Creek',
    display: 'Indian Creek',
    seoTitle: 'Indian Creek Carrollton Sprinkler Repair',
    metaDescription:
      'Sprinkler repair, installation, and smart controllers for Indian Creek homes in Carrollton, TX. HOA-friendly, golf course lots. License #8146. Call (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, irrigation installation, and smart controller upgrades in the Indian Creek area of Carrollton, Texas. We work with established HOA neighborhoods, golf course frontage, and tree-lined streets.',
    introEm: 'Indian Creek Homeowners',
    intro: [
      'Indian Creek sits in north Carrollton near Hebron Parkway, with the Indian Creek Golf Club and Coyote Ridge Golf Club close by. Most homes here were built from the 1980s onward, which means many sprinkler systems are now decades old, even when the houses themselves have been updated.',
      'Sprinklers and Lawns brings more than 25 years of irrigation experience to Carrollton neighborhoods like this one, backed by Texas license #8146 and horticulture training from Texas A&M. Whether your lawn backs up to a fairway, borders a pond, or sits under a mature canopy, we design and tune each zone for the conditions you actually have.',
    ],
    highlights: [
      'Indian Creek is in north Carrollton near Hebron Parkway, close to the Indian Creek and Coyote Ridge golf courses',
      'Many homes were built in the 1980s and 1990s, so original sprinkler systems may be 25 to 40 years old',
      'Neighborhood HOAs often set landscape standards, so a healthy, even lawn matters beyond curb appeal',
      'Golf course and pond frontage creates sun exposure, drainage, and edge-of-lawn conditions that affect each zone',
      'Mature trees in older sections and newer plantings in others call for zone-by-zone programming',
    ],
    issuesTitle: 'Irrigation issues Indian Creek homes often face',
    issues: [
      {
        t: 'Original systems reaching the end of their life',
        d: 'Valves, wiring, and heads installed in the 1980s and 1990s wear out. Symptoms include zones that will not start, heads that stick or leak, and brown patches that keep coming back.',
      },
      {
        t: 'HOA lawn standards',
        d: 'When the neighborhood expects a green, even lawn, small coverage gaps stand out. Proper head spacing, matched nozzles, and the right run times keep turf looking consistent without overwatering.',
      },
      {
        t: 'Mixed sun and shade',
        d: 'Open lots next to fairways get hard sun, while tree-covered yards stay cool. Running every zone on the same schedule wastes water and stresses grass. Zone tuning and smart controllers solve this.',
      },
      {
        t: 'Runoff near ponds and greenbelts',
        d: 'Overspray and runoff on sloped or edge-of-lawn areas waste water and can wash soil away. Repositioning heads and adjusting precipitation rates keeps water where it belongs.',
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
        q: 'Do smart controllers make sense for Indian Creek homes?',
        a: 'For many yards, yes. Weather-based controllers adjust run times automatically, which helps in a climate with hot summers and sudden rain. They are especially useful on larger lots with mixed sun and shade.',
      },
      {
        q: 'How do I schedule irrigation service in Indian Creek?',
        a: 'Call (972) 755-9019 or book online. We are licensed in Texas (License #8146) and back our work with a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/indian-creek.jpg`,
    img1Alt: 'Indian Creek neighborhood in Carrollton Texas',
    img2: `${IMG_DIR}/indian-creek.jpg`,
    img2Alt: 'Lawn and irrigation in Indian Creek Carrollton Texas',
  },

  {
    slug: 'rosemeade',
    name: 'Rosemeade',
    display: 'Rosemeade',
    seoTitle: 'Rosemeade Carrollton Sprinkler Repair',
    metaDescription:
      'Sprinkler repair and irrigation upgrades for established Rosemeade homes in Carrollton, TX. Aging systems, mature trees, renovated homes. License #8146. (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, head replacement, and irrigation upgrades in the Rosemeade neighborhood of Carrollton, Texas. We help established homes get reliable coverage and lower water use.',
    introEm: 'Rosemeade Homeowners',
    intro: [
      'Rosemeade is an established neighborhood in north-central Carrollton, centered on Rosemeade Parkway, with neighborhood parks, quiet cul-de-sacs, and generous lots, often around a fifth to a third of an acre. Many homes here were built in the late 1970s and 1980s, and plenty of them have had kitchens and bathrooms updated while the sprinkler system under the lawn stayed the same.',
      'That is where we come in. Sprinklers and Lawns has served Carrollton homeowners for over 25 years, and we know how systems of this age behave: worn valves, brittle fittings, clogged or misaligned heads, and controllers that cannot adjust to the weather. We diagnose the problem, repair what makes sense, and upgrade what does not.',
    ],
    highlights: [
      'Rosemeade is an established north-central Carrollton neighborhood, with many homes built in the 1970s and 1980s',
      'Lots are often a fifth to a third of an acre, enough lawn that coverage and zone design matter',
      'Renovated homes frequently have updated interiors but original irrigation systems',
      'Mature trees and older landscaping beds change how water should be applied in each zone',
      'Neighborhood parks nearby make well-kept lawns part of the area’s character',
    ],
    issuesTitle: 'Irrigation issues Rosemeade homes often face',
    issues: [
      {
        t: 'Systems that are 30 to 40 years old',
        d: 'Original valves, wiring, and pipes eventually fail. You may see zones that will not turn on, leaks that keep reappearing, or a water bill that creeps up without explanation.',
      },
      {
        t: 'Renovated house, original sprinklers',
        d: 'New flooring does not fix old irrigation. If your home was updated but the yard was not, a system check can catch problems before they damage new landscaping.',
      },
      {
        t: 'Soil movement',
        d: 'North Texas clay soil expands when wet and shrinks when dry, which can crack lines and shift heads over the years. Repairing broken sections and resetting heads restores even coverage.',
      },
      {
        t: 'Outdated timers',
        d: 'Basic timers water on a fixed schedule, rain or shine. A smart controller with rain and freeze sensors cuts waste and protects the lawn.',
      },
    ],
    faqs: [
      {
        q: 'How do I know if my Rosemeade sprinkler system needs repair or replacement?',
        a: 'Warning signs include zones that do not run, geysers or soggy spots, dry patches, and unexplained jumps in your water bill. We inspect the whole system and explain whether repair or replacement is the better value.',
      },
      {
        q: 'I just renovated my home. Should I check my irrigation?',
        a: 'It is a good idea. A quick inspection can catch leaks, broken heads, and wiring problems before they damage new landscaping or hardscape.',
      },
      {
        q: 'Does clay soil affect my sprinklers?',
        a: 'Yes. Clay holds water and drains slowly, so long runs can cause runoff, while soil movement can crack lines. We set shorter, split run times where it helps and repair any damage from shifting soil.',
      },
      {
        q: 'How do I book service in Rosemeade?',
        a: 'Call (972) 755-9019 or use Book Now. Sprinklers and Lawns is a licensed Texas irrigation company (License #8146) with a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/rosemeade.jpg`,
    img1Alt: 'Rosemeade neighborhood in Carrollton Texas',
    img2: `${IMG_DIR}/rosemeade.jpg`,
    img2Alt: 'Sprinkler repair for a Rosemeade home in Carrollton Texas',
  },

  {
    slug: 'castle-hills',
    name: 'Castle Hills',
    display: 'Castle Hills',
    seoTitle: 'Castle Hills Sprinkler Repair, Carrollton',
    metaDescription:
      'Sprinkler repair, installation, and smart irrigation for Castle Hills homes on the Carrollton-Lewisville border. HOA lawns, newer systems. License #8146. (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, installation, and smart controller upgrades in Castle Hills, the master-planned community on the Carrollton and Lewisville border.',
    introEm: 'Castle Hills Homeowners',
    intro: [
      'Castle Hills is a master-planned community of roughly 2,900 acres in Denton County, with parks, trails, a golf course, and village-style shopping. Its first residents moved in during 1998, and most of the community is now part of the City of Lewisville, although some sections carry Carrollton addresses.',
      'Sprinklers and Lawns has served Carrollton and surrounding communities for over 25 years. In a neighborhood like Castle Hills, where lawns and landscaping are on show, we focus on efficient coverage, smart scheduling, and dependable repairs so your irrigation works the way the community expects it to.',
    ],
    highlights: [
      'Castle Hills is a master-planned community on the Carrollton and Lewisville border, with the first homes built in the late 1990s',
      'Homes range from established sections to newer builds, so irrigation age and design vary from street to street',
      'Which city’s watering rules apply depends on your address, so we check the current requirements for your property',
      'Community parks, trails, and a golf course nearby make well-kept landscaping a neighborhood standard',
      'Builder-installed systems are often designed to minimum standards and benefit from upgrades such as smart controllers and better zoning',
    ],
    issuesTitle: 'Irrigation issues Castle Hills homes often face',
    issues: [
      {
        t: 'Builder-grade systems',
        d: 'Systems installed at construction are often designed to be functional rather than ideal. Adding a smart controller, adjusting nozzles, and rebalancing zones can improve coverage and cut water use.',
      },
      {
        t: 'Systems approaching 20 to 25 years old',
        d: 'Homes from the early years of the community now have systems old enough to show wear: sticking valves, leaking fittings, and heads that no longer pop up or spray evenly.',
      },
      {
        t: 'Landscape changes',
        d: 'New beds, trees, pools, and patios change where water needs to go. Irrigation designed for the original landscape needs to be updated to match.',
      },
      {
        t: 'Rules that vary by address',
        d: 'Watering limits can differ depending on which city and water provider serves your home. We help set a schedule that fits the rules that apply to you.',
      },
    ],
    faqs: [
      {
        q: 'Is Castle Hills in Carrollton or Lewisville?',
        a: 'Castle Hills straddles the two cities. Most of the community is now in the City of Lewisville, and some sections have Carrollton addresses. We serve homeowners throughout the community.',
      },
      {
        q: 'Which watering rules apply to my home?',
        a: 'That depends on your address and water provider. Check your city’s current irrigation and drought rules, and we will program your controller to follow them.',
      },
      {
        q: 'Should I upgrade the builder-installed sprinkler system?',
        a: 'Often a partial upgrade is enough. Replacing worn heads, adding a smart controller, and fixing zone coverage gives many homeowners most of the benefit without a full rebuild.',
      },
      {
        q: 'How do I schedule service in Castle Hills?',
        a: 'Call (972) 755-9019 or book online. We are licensed in Texas (License #8146) and provide a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/castle-hills.webp`,
    img1Alt: 'Castle Hills community near Carrollton and Lewisville Texas',
    img2: `${IMG_DIR}/castle-hills.webp`,
    img2Alt: 'Irrigation service in Castle Hills Texas',
  },

  {
    slug: 'furneaux-creek',
    name: 'Furneaux Creek',
    display: 'Furneaux Creek',
    seoTitle: 'Furneaux Creek Carrollton Sprinkler Repair',
    metaDescription:
      'Sprinkler repair and irrigation service near Furneaux Creek in Carrollton, TX. Slopes, greenbelt edges, older systems. License #8146. Call (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, drainage-aware irrigation, and head replacement in the Furneaux Creek area of Carrollton, Texas, where greenbelts, creek edges, and established neighborhoods shape every yard.',
    introEm: 'Furneaux Creek Homeowners',
    intro: [
      'The Furneaux Creek area follows the creek and its greenbelt trail through north Carrollton near Hebron Parkway, with established neighborhoods on both sides. Many nearby homes were built in the 1970s and 1980s, and the greenbelt, parks, and trails make landscaping a big part of daily life here.',
      'Yards near a creek behave differently from yards on flat, open ground. Slopes, drainage, and tree roots all affect where water goes. Sprinklers and Lawns has served Carrollton for over 25 years, and we design and adjust irrigation to match the land, not just the lawn.',
    ],
    highlights: [
      'Furneaux Creek and its greenbelt trail run through north Carrollton near Hebron Parkway',
      'Many nearby homes were built in the 1970s and 1980s, so older systems are common',
      'Properties near the creek and greenbelt can have slopes and drainage that call for shorter, split run times',
      'Roots from greenbelt trees and mature yard trees can damage lines and shift heads',
      'Matched nozzles and precise head placement keep overspray off sidewalks, fences, and natural areas',
    ],
    issuesTitle: 'Irrigation issues homes near Furneaux Creek often face',
    issues: [
      {
        t: 'Slopes and runoff',
        d: 'Water applied too quickly on a slope runs off instead of soaking in, wasting water and carrying soil away. Cycle-and-soak run times and the right nozzles help water reach the roots.',
      },
      {
        t: 'Erosion at creek edges',
        d: 'Fast-moving water and exposed slopes can erode creek banks over time. Careful irrigation avoids adding extra water to vulnerable areas.',
      },
      {
        t: 'Aging systems',
        d: 'Homes built in the 1970s and 1980s may still have original or heavily patched irrigation. Worn valves, cracked fittings, and clogged heads lead to uneven coverage.',
      },
      {
        t: 'Roots and shifting soil',
        d: 'Trees along the greenbelt and clay soil that expands and shrinks can crack lines and tilt heads. We repair the damage and reset heads for even coverage.',
      },
    ],
    faqs: [
      {
        q: 'Does living near the creek change how I should water?',
        a: 'It can. Sloped or low-lying areas drain differently, so shorter, repeated cycles often work better than one long run. We set zones based on how your yard drains.',
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
        q: 'How do I book service near Furneaux Creek?',
        a: 'Call (972) 755-9019 or use Book Now. We hold Texas irrigation license #8146 and offer a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/furneaux-creek.jpg`,
    img1Alt: 'Furneaux Creek greenbelt in Carrollton Texas',
    img2: `${IMG_DIR}/furneaux-creek.jpg`,
    img2Alt: 'Sprinkler service near Furneaux Creek in Carrollton Texas',
  },

  {
    slug: 'sandy-lake-area',
    name: 'Sandy Lake area',
    display: 'Sandy Lake Area',
    seoTitle: 'Sandy Lake Carrollton Irrigation Service',
    metaDescription:
      'Commercial and residential irrigation service in the Sandy Lake area of Carrollton, TX. Business parks, multifamily, HOA common areas. License #8146. (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides irrigation repair, installation, and seasonal maintenance in the Sandy Lake area of Carrollton, Texas, for homes, apartment communities, and commercial properties along the I-35E corridor.',
    introEm: 'Sandy Lake Area Properties',
    intro: [
      'The Sandy Lake area in west Carrollton sits around Sandy Lake Road and Interstate 35E, near the George Bush Turnpike. It is a mix of business parks, multifamily communities, and neighborhoods, with the Valwood industrial district close by.',
      'That mix means irrigation needs range from a single home lawn to large commercial grounds. Sprinklers and Lawns has served Carrollton homeowners and property managers for over 25 years, and we handle both small repairs and larger commercial zones, with clear communication on every job.',
    ],
    highlights: [
      'The Sandy Lake area sits along Interstate 35E in west Carrollton, near the George Bush Turnpike',
      'The area includes business parks, apartment communities, and residential streets',
      'Commercial and multifamily properties often have many zones and need regular inspection and programming',
      'Backflow prevention, rain and freeze sensors, and smart controllers help property managers control water costs',
      'Frontage landscaping along busy roads needs reliable coverage to look good year-round',
    ],
    issuesTitle: 'Irrigation issues Sandy Lake area properties often face',
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
        q: 'Do you service commercial and apartment properties near Sandy Lake Road?',
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
        q: 'How do I schedule service near Sandy Lake Road?',
        a: 'Call (972) 755-9019 or use Book Now. We are licensed in Texas (License #8146) and back our work with a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/sandy-lake-area.jpg`,
    img1Alt: 'Sandy Lake area of Carrollton Texas',
    img2: `${IMG_DIR}/sandy-lake-area.jpg`,
    img2Alt: 'Commercial irrigation service in the Sandy Lake area of Carrollton Texas',
  },

  {
    slug: 'josey-lane-corridor',
    name: 'Josey Lane corridor',
    display: 'Josey Lane Corridor',
    seoTitle: 'Josey Lane Carrollton Sprinkler Repair',
    metaDescription:
      'Sprinkler repair, installation, and irrigation service along the Josey Lane corridor in Carrollton, TX. Homes, HOAs, retail. License #8146. Call (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, installation, and seasonal irrigation along the Josey Lane corridor in Carrollton, Texas, from established neighborhoods to shopping centers and apartment communities.',
    introEm: 'Josey Lane Corridor Properties',
    intro: [
      'Josey Lane runs north to south through Carrollton, linking Belt Line Road, Keller Springs Road, and Trinity Mills Road with the George Bush Turnpike area and neighborhoods farther north. Along it you will find established subdivisions such as those in Josey Ranch, apartment communities, schools, and retail centers.',
      'Many homes along the corridor were built in the 1970s and 1980s, so there are plenty of sprinkler systems that are decades old. Sprinklers and Lawns has served Carrollton for over 25 years, and we work with homeowners, HOAs, and property managers to repair, upgrade, and maintain irrigation along this busy part of the city.',
    ],
    highlights: [
      'Josey Lane runs north to south through Carrollton past Belt Line Road, Keller Springs Road, and Trinity Mills Road',
      'The corridor includes established subdivisions in Josey Ranch and nearby areas, many with homes from the 1970s and 1980s',
      'Apartment communities, schools, and shopping centers along the road need dependable commercial-style irrigation',
      'Frontage landscaping on a busy road shows problems quickly, so reliable coverage matters',
      'HOA and property manager accounts benefit from regular seasonal inspections and clear communication',
    ],
    issuesTitle: 'Irrigation issues along the Josey Lane corridor',
    issues: [
      {
        t: 'Aging residential systems',
        d: 'Subdivisions built in the 1970s and 1980s often still have original valves, wiring, and heads. Failures show up as zones that will not run, leaks, and uneven coverage.',
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
        q: 'Do you serve both homes and businesses along Josey Lane?',
        a: 'Yes. We work with homeowners, HOAs, and property managers, including commercial and multifamily properties.',
      },
      {
        q: 'My neighborhood was built in the 1980s. Is my system likely to need work?',
        a: 'If the system is original, it is probably worth an inspection. Worn valves, brittle fittings, and misaligned heads are common at that age, and catching them early costs less than waiting for a failure.',
      },
      {
        q: 'Can you set up regular maintenance for an apartment community or shopping center?',
        a: 'Yes. Seasonal maintenance includes scheduled inspections and programming adjustments throughout the year.',
      },
      {
        q: 'How do I schedule service along Josey Lane?',
        a: 'Call (972) 755-9019 or use Book Now. We hold Texas irrigation license #8146 and provide a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/josey-lane-corridor.jpg`,
    img1Alt: 'Josey Lane corridor in Carrollton Texas',
    img2: `${IMG_DIR}/josey-lane-corridor.jpg`,
    img2Alt: 'Irrigation service along Josey Lane in Carrollton Texas',
  },

  {
    slug: 'trinity-mills-area',
    name: 'Trinity Mills area',
    display: 'Trinity Mills Area',
    seoTitle: 'Trinity Mills Carrollton Sprinkler Repair',
    metaDescription:
      'Sprinkler repair and irrigation for homes, townhomes, and apartment communities in the Trinity Mills area of Carrollton, TX. License #8146. Call (972) 755-9019.',
    heroText:
      'Sprinklers and Lawns provides sprinkler repair, installation, and seasonal irrigation in the Trinity Mills area of Carrollton, Texas, around Trinity Mills Road and the DART Green Line station.',
    introEm: 'Trinity Mills Area Properties',
    intro: [
      'The Trinity Mills area in central Carrollton centers on Trinity Mills Road and the Trinity Mills DART Green Line station. It blends single-family streets with townhomes, condominiums, apartment communities, and business parks, so the irrigation needs here are as varied as the buildings.',
      'Sprinklers and Lawns has served Carrollton for over 25 years. In an area like this we handle everything from a single backyard zone to shared common-area landscaping, with clear communication, and every job comes with a 1-year warranty on parts and labor.',
    ],
    highlights: [
      'The Trinity Mills area sits around Trinity Mills Road and the Trinity Mills DART Green Line station',
      'Single-family homes, townhomes, condominiums, apartment communities, and business parks share the area',
      'Shared common areas need consistent schedules and reliable coverage, often managed by an HOA or property manager',
      'Compact lots and small yards call for careful head placement to avoid overspray onto sidewalks and parking',
      'Smart controllers and sensors help control water costs for both individual homes and larger properties',
    ],
    issuesTitle: 'Irrigation issues Trinity Mills area properties often face',
    issues: [
      {
        t: 'Small lots, tight spaces',
        d: 'Narrow strips and small yards need low-angle nozzles and careful spacing so water lands on the lawn and not on the driveway or the neighbor’s fence.',
      },
      {
        t: 'Shared landscaping',
        d: 'Townhome and apartment communities rely on shared irrigation systems. One failure can affect many units, so quick repairs and regular inspections matter.',
      },
      {
        t: 'Older and newer systems side by side',
        d: 'Established homes may have original irrigation, while newer developments have builder-installed systems. Each needs a different approach.',
      },
      {
        t: 'Water waste',
        d: 'Fixed-schedule timers water through the rain. Smart controllers with rain and freeze sensors cut waste and keep landscaping healthy.',
      },
    ],
    faqs: [
      {
        q: 'Do you work on townhome and apartment community irrigation?',
        a: 'Yes. We service residential and commercial properties, including common-area landscaping for HOAs and property managers.',
      },
      {
        q: 'My yard is small. Is a sprinkler system still worth it?',
        a: 'Often, yes. A properly designed system with the right nozzles waters a small yard evenly and saves the time of hand watering.',
      },
      {
        q: 'How often should the system be inspected?',
        a: 'We recommend seasonal inspections with programming adjustments as the weather changes. That catches leaks and broken heads early.',
      },
      {
        q: 'How do I schedule service in the Trinity Mills area?',
        a: 'Call (972) 755-9019 or use Book Now. We are licensed in Texas (License #8146) and provide a 1-year warranty on parts and labor.',
      },
    ],
    img1: `${IMG_DIR}/trinity-mills-area.jpg`,
    img1Alt: 'Trinity Mills area of Carrollton Texas',
    img2: `${IMG_DIR}/trinity-mills-area.jpg`,
    img2Alt: 'Irrigation service in the Trinity Mills area of Carrollton Texas',
  },
];

export function getNeighborhood(slug) {
  return neighborhoods.find((n) => n.slug === slug) || null;
}