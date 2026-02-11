// ============================================
// Butterflaw Coach — Seed Data
// Habits, Lessons, Programs for MVP
// ============================================

import type { Habit, Lesson, Program, GoalMeta } from '../types';

// --- Goal Metadata ---

export const GOALS: GoalMeta[] = [
  {
    id: 'skin',
    label: 'Skin',
    labelSl: 'Koža',
    icon: '✨',
    color: '#FBBF24',
    description: 'Glow from within — skincare habits & knowledge',
    descriptionSl: 'Sijaj od znotraj — navade za nego kože',
  },
  {
    id: 'hair',
    label: 'Hair',
    labelSl: 'Lasje',
    icon: '💇',
    color: '#A78BFA',
    description: 'Healthy, strong hair — care routines & tips',
    descriptionSl: 'Zdravi, močni lasje — rutine in nasveti',
  },
  {
    id: 'posture',
    label: 'Posture',
    labelSl: 'Drža',
    icon: '🧘',
    color: '#34D399',
    description: 'Stand tall — posture exercises & awareness',
    descriptionSl: 'Stoj pokončno — vaje za držo in zavedanje',
  },
  {
    id: 'style',
    label: 'Style',
    labelSl: 'Stil',
    icon: '👔',
    color: '#F472B6',
    description: 'Express yourself — outfit & grooming basics',
    descriptionSl: 'Izrazi se — osnove oblačenja in urejanja',
  },
  {
    id: 'energy',
    label: 'Energy',
    labelSl: 'Energija',
    icon: '⚡',
    color: '#FB923C',
    description: 'Feel alive — movement, sleep & vitality',
    descriptionSl: 'Čuti se živ — gibanje, spanje in vitalnost',
  },
];

// --- Habits (60) ---

export const HABITS: Habit[] = [
  // SKIN (20)
  { id: 'h_face_wash_am', title: 'Morning face wash', description: 'Gently cleanse your face with lukewarm water and a mild cleanser.', durationMinutes: 3, goal: 'skin', difficulty: 'beginner', category: 'skincare', icon: '🧴', instructions: '1. Wet face with lukewarm water\n2. Apply small amount of cleanser\n3. Massage in circles for 30s\n4. Rinse and pat dry' },
  { id: 'h_moisturize_am', title: 'Morning moisturizer', description: 'Apply a light moisturizer to hydrate your skin for the day.', durationMinutes: 2, goal: 'skin', difficulty: 'beginner', category: 'skincare', icon: '💧' },
  { id: 'h_sunscreen', title: 'Apply sunscreen', description: 'Protect your skin with SPF 30+ sunscreen every morning.', durationMinutes: 2, goal: 'skin', difficulty: 'beginner', category: 'skincare', icon: '☀️' },
  { id: 'h_face_wash_pm', title: 'Evening face wash', description: 'Remove the day\'s dirt and makeup with a thorough cleanse.', durationMinutes: 5, goal: 'skin', difficulty: 'beginner', category: 'skincare', icon: '🌙' },
  { id: 'h_moisturize_pm', title: 'Night moisturizer', description: 'Apply a richer moisturizer before sleep for overnight repair.', durationMinutes: 2, goal: 'skin', difficulty: 'beginner', category: 'skincare', icon: '🌜' },
  { id: 'h_lip_balm', title: 'Lip care', description: 'Apply lip balm to keep your lips hydrated and smooth.', durationMinutes: 1, goal: 'skin', difficulty: 'beginner', category: 'skincare', icon: '💋' },
  { id: 'h_eye_cream', title: 'Eye cream application', description: 'Gently dab eye cream around the eye area with your ring finger.', durationMinutes: 2, goal: 'skin', difficulty: 'intermediate', category: 'skincare', icon: '👁️' },
  { id: 'h_face_mask', title: 'Face mask session', description: 'Apply a hydrating or clay face mask for 10 minutes.', durationMinutes: 15, goal: 'skin', difficulty: 'intermediate', category: 'skincare', icon: '🎭' },
  { id: 'h_exfoliate', title: 'Gentle exfoliation', description: 'Use a mild exfoliator to remove dead skin cells (2x/week max).', durationMinutes: 5, goal: 'skin', difficulty: 'intermediate', category: 'skincare', icon: '🫧' },
  { id: 'h_toner', title: 'Apply toner', description: 'Use toner after cleansing to balance your skin\'s pH.', durationMinutes: 2, goal: 'skin', difficulty: 'intermediate', category: 'skincare', icon: '🧪' },
  { id: 'h_serum', title: 'Apply serum', description: 'Apply vitamin C or hyaluronic acid serum to your face.', durationMinutes: 2, goal: 'skin', difficulty: 'intermediate', category: 'skincare', icon: '💎' },
  { id: 'h_water_intake', title: 'Track water intake', description: 'Drink at least 2L of water today for hydrated skin.', durationMinutes: 1, goal: 'skin', difficulty: 'beginner', category: 'hydration', icon: '🥤' },
  { id: 'h_hand_cream', title: 'Hand cream', description: 'Moisturize your hands after washing to prevent dryness.', durationMinutes: 1, goal: 'skin', difficulty: 'beginner', category: 'skincare', icon: '🤲' },
  { id: 'h_body_lotion', title: 'Body lotion after shower', description: 'Apply body lotion while skin is still slightly damp.', durationMinutes: 3, goal: 'skin', difficulty: 'beginner', category: 'bodycare', icon: '🧴' },
  { id: 'h_no_touch_face', title: 'Don\'t touch your face', description: 'Be mindful — avoid touching your face to prevent breakouts.', durationMinutes: 1, goal: 'skin', difficulty: 'beginner', category: 'awareness', icon: '🚫' },
  { id: 'h_clean_pillowcase', title: 'Change pillowcase', description: 'Replace your pillowcase for cleaner skin (weekly habit).', durationMinutes: 2, goal: 'skin', difficulty: 'beginner', category: 'hygiene', icon: '🛏️' },
  { id: 'h_cold_water_rinse', title: 'Cold water face rinse', description: 'Finish your wash with cold water to tighten pores.', durationMinutes: 1, goal: 'skin', difficulty: 'beginner', category: 'skincare', icon: '❄️' },
  { id: 'h_green_tea', title: 'Drink green tea', description: 'Green tea is packed with antioxidants — great for your skin.', durationMinutes: 5, goal: 'skin', difficulty: 'beginner', category: 'nutrition', icon: '🍵' },
  { id: 'h_skin_journal', title: 'Skin journal entry', description: 'Note how your skin looks/feels today. Track patterns.', durationMinutes: 3, goal: 'skin', difficulty: 'intermediate', category: 'tracking', icon: '📝' },
  { id: 'h_spf_reapply', title: 'Reapply sunscreen', description: 'Reapply sunscreen if you\'ve been outdoors for 2+ hours.', durationMinutes: 2, goal: 'skin', difficulty: 'advanced', category: 'skincare', icon: '🔄' },

  // HAIR (15)
  { id: 'h_scalp_massage', title: 'Scalp massage', description: 'Massage your scalp with fingertips for 2 min to boost circulation.', durationMinutes: 3, goal: 'hair', difficulty: 'beginner', category: 'haircare', icon: '💆' },
  { id: 'h_gentle_brush', title: 'Gentle hair brushing', description: 'Brush hair gently from ends to roots to prevent breakage.', durationMinutes: 3, goal: 'hair', difficulty: 'beginner', category: 'haircare', icon: '💇' },
  { id: 'h_hair_oil', title: 'Hair oil treatment', description: 'Apply warm oil (coconut/argan) to scalp and lengths. Leave 15 min.', durationMinutes: 15, goal: 'hair', difficulty: 'intermediate', category: 'haircare', icon: '🫒' },
  { id: 'h_cold_rinse_hair', title: 'Cold water hair rinse', description: 'Finish your hair wash with cold water for shine and smoothness.', durationMinutes: 1, goal: 'hair', difficulty: 'beginner', category: 'haircare', icon: '❄️' },
  { id: 'h_no_heat', title: 'No-heat hair day', description: 'Skip the blow dryer and straightener today. Let hair air dry.', durationMinutes: 1, goal: 'hair', difficulty: 'beginner', category: 'awareness', icon: '🌬️' },
  { id: 'h_deep_condition', title: 'Deep conditioning mask', description: 'Apply deep conditioner, leave for 10 min, rinse thoroughly.', durationMinutes: 15, goal: 'hair', difficulty: 'intermediate', category: 'haircare', icon: '🧴' },
  { id: 'h_silk_pillowcase', title: 'Sleep on silk pillowcase', description: 'Silk reduces friction and prevents hair breakage while sleeping.', durationMinutes: 1, goal: 'hair', difficulty: 'beginner', category: 'lifestyle', icon: '🛏️' },
  { id: 'h_trim_check', title: 'Check for split ends', description: 'Inspect hair ends. Schedule a trim if you see splitting.', durationMinutes: 3, goal: 'hair', difficulty: 'beginner', category: 'maintenance', icon: '✂️' },
  { id: 'h_hair_vitamins', title: 'Hair-friendly nutrition', description: 'Eat biotin-rich food today (eggs, nuts, avocado).', durationMinutes: 5, goal: 'hair', difficulty: 'beginner', category: 'nutrition', icon: '🥑' },
  { id: 'h_loose_hairstyle', title: 'Wear hair loosely', description: 'Avoid tight ponytails today — they cause tension and breakage.', durationMinutes: 1, goal: 'hair', difficulty: 'beginner', category: 'awareness', icon: '🎀' },
  { id: 'h_dry_shampoo', title: 'Dry shampoo refresh', description: 'Use dry shampoo at the roots to absorb oil between washes.', durationMinutes: 3, goal: 'hair', difficulty: 'beginner', category: 'haircare', icon: '💨' },
  { id: 'h_leave_in_cond', title: 'Leave-in conditioner', description: 'Apply a small amount of leave-in conditioner to damp hair.', durationMinutes: 2, goal: 'hair', difficulty: 'beginner', category: 'haircare', icon: '💧' },
  { id: 'h_protect_from_sun', title: 'Protect hair from sun', description: 'Wear a hat or apply UV hair spray when outdoors for long periods.', durationMinutes: 1, goal: 'hair', difficulty: 'intermediate', category: 'protection', icon: '🧢' },
  { id: 'h_wash_routine', title: 'Proper shampoo technique', description: 'Shampoo roots only, condition ends only. Rinse thoroughly.', durationMinutes: 5, goal: 'hair', difficulty: 'beginner', category: 'haircare', icon: '🚿' },
  { id: 'h_hair_detox', title: 'Scalp detox rinse', description: 'Rinse with diluted apple cider vinegar for scalp freshness.', durationMinutes: 5, goal: 'hair', difficulty: 'advanced', category: 'haircare', icon: '🍎' },

  // POSTURE (15)
  { id: 'h_posture_check', title: 'Posture check-in', description: 'Stop what you\'re doing. Are you slouching? Straighten up!', durationMinutes: 1, goal: 'posture', difficulty: 'beginner', category: 'awareness', icon: '📐' },
  { id: 'h_morning_stretch', title: 'Morning stretch routine', description: 'Cat-cow, neck rolls, and shoulder shrugs to start your day.', durationMinutes: 5, goal: 'posture', difficulty: 'beginner', category: 'exercise', icon: '🌅' },
  { id: 'h_desk_break', title: 'Desk break stretch', description: 'Stand up, stretch your arms overhead, roll shoulders 10x.', durationMinutes: 3, goal: 'posture', difficulty: 'beginner', category: 'exercise', icon: '🪑' },
  { id: 'h_wall_angel', title: 'Wall angels', description: 'Stand back against wall, do 10 slow wall angels for upper back.', durationMinutes: 5, goal: 'posture', difficulty: 'intermediate', category: 'exercise', icon: '🧱' },
  { id: 'h_plank', title: 'Plank hold', description: 'Hold a plank for 30–60 seconds to strengthen your core.', durationMinutes: 2, goal: 'posture', difficulty: 'intermediate', category: 'exercise', icon: '💪' },
  { id: 'h_chin_tuck', title: 'Chin tucks', description: 'Do 10 chin tucks to strengthen neck muscles and fix forward head.', durationMinutes: 3, goal: 'posture', difficulty: 'beginner', category: 'exercise', icon: '🦢' },
  { id: 'h_hip_flexor', title: 'Hip flexor stretch', description: 'Kneel in a lunge, push hips forward. Hold 30s each side.', durationMinutes: 5, goal: 'posture', difficulty: 'intermediate', category: 'exercise', icon: '🦵' },
  { id: 'h_thoracic_ext', title: 'Thoracic extension', description: 'Use a foam roller or chair back for upper spine extension.', durationMinutes: 5, goal: 'posture', difficulty: 'intermediate', category: 'exercise', icon: '🔄' },
  { id: 'h_shoulder_rolls', title: 'Shoulder rolls', description: '20 forward + 20 backward shoulder rolls to release tension.', durationMinutes: 2, goal: 'posture', difficulty: 'beginner', category: 'exercise', icon: '🔵' },
  { id: 'h_walk_tall', title: 'Walk tall for 5 min', description: 'Walk around your space imagining a string pulling your head up.', durationMinutes: 5, goal: 'posture', difficulty: 'beginner', category: 'awareness', icon: '🚶' },
  { id: 'h_screen_height', title: 'Adjust screen height', description: 'Ensure your monitor is at eye level. Adjust chair if needed.', durationMinutes: 3, goal: 'posture', difficulty: 'beginner', category: 'ergonomics', icon: '🖥️' },
  { id: 'h_glute_bridge', title: 'Glute bridges', description: '15 glute bridges to activate glutes and support your lower back.', durationMinutes: 5, goal: 'posture', difficulty: 'intermediate', category: 'exercise', icon: '🍑' },
  { id: 'h_standing_desk', title: 'Standing desk time', description: 'Stand for at least 30 minutes during work today.', durationMinutes: 5, goal: 'posture', difficulty: 'beginner', category: 'ergonomics', icon: '🧍' },
  { id: 'h_dead_hang', title: 'Dead hang', description: 'Hang from a bar for 20–30 seconds to decompress your spine.', durationMinutes: 2, goal: 'posture', difficulty: 'advanced', category: 'exercise', icon: '🏋️' },
  { id: 'h_body_scan', title: 'Body tension scan', description: 'Close eyes, scan from head to toe. Release any tension you find.', durationMinutes: 3, goal: 'posture', difficulty: 'beginner', category: 'mindfulness', icon: '🧘' },

  // STYLE (5)
  { id: 'h_outfit_plan', title: 'Plan tomorrow\'s outfit', description: 'Pick an outfit tonight so mornings are stress-free.', durationMinutes: 5, goal: 'style', difficulty: 'beginner', category: 'planning', icon: '👗' },
  { id: 'h_closet_tidy', title: 'Tidy one shelf', description: 'Organize one shelf or drawer in your closet. 5 minutes max.', durationMinutes: 5, goal: 'style', difficulty: 'beginner', category: 'organization', icon: '🗄️' },
  { id: 'h_accessory', title: 'Try an accessory', description: 'Add one accessory you don\'t usually wear (watch, scarf, earrings).', durationMinutes: 2, goal: 'style', difficulty: 'beginner', category: 'expression', icon: '💍' },
  { id: 'h_iron_clothes', title: 'Iron or steam an outfit', description: 'Press the outfit you\'ll wear tomorrow. Small effort, big impact.', durationMinutes: 5, goal: 'style', difficulty: 'beginner', category: 'maintenance', icon: '👔' },
  { id: 'h_style_inspo', title: 'Style inspiration', description: 'Save 3 outfit ideas from Pinterest or Instagram for future reference.', durationMinutes: 5, goal: 'style', difficulty: 'beginner', category: 'inspiration', icon: '📌' },

  // ENERGY (5)
  { id: 'h_morning_walk', title: 'Morning sunlight walk', description: 'Walk outside for 10 min in morning sunlight to boost energy.', durationMinutes: 10, goal: 'energy', difficulty: 'beginner', category: 'movement', icon: '🌤️' },
  { id: 'h_cold_shower', title: 'Cold shower finish', description: 'End your shower with 30s of cold water for an energy boost.', durationMinutes: 1, goal: 'energy', difficulty: 'intermediate', category: 'vitality', icon: '🚿' },
  { id: 'h_breathing', title: 'Box breathing', description: '4 rounds of box breathing: inhale 4s, hold 4s, exhale 4s, hold 4s.', durationMinutes: 3, goal: 'energy', difficulty: 'beginner', category: 'mindfulness', icon: '🫁' },
  { id: 'h_screen_break', title: 'Screen-free break', description: 'Step away from all screens for 10 minutes. Look at distant objects.', durationMinutes: 10, goal: 'energy', difficulty: 'beginner', category: 'recovery', icon: '📵' },
  { id: 'h_power_nap', title: 'Power nap', description: 'Set a 15-minute timer and rest your eyes. No scrolling!', durationMinutes: 15, goal: 'energy', difficulty: 'beginner', category: 'recovery', icon: '😴' },
];

// --- Lessons (30) ---

export const LESSONS: Lesson[] = [
  // SKIN (10)
  { id: 'l_why_sunscreen', title: 'Why sunscreen is #1', description: 'The single most important skincare product you can use.', durationSeconds: 58, goal: 'skin', difficulty: 'beginner', icon: '☀️', content: 'UV rays cause 80% of visible skin aging. SPF 30+ blocks 97% of UVB rays. Apply every morning, even on cloudy days. Reapply every 2 hours when outdoors. Your future self will thank you.' },
  { id: 'l_skin_types', title: 'Know your skin type', description: 'Dry, oily, combination — what does yours need?', durationSeconds: 45, goal: 'skin', difficulty: 'beginner', icon: '🔬', content: 'There are 4 main skin types: DRY (tight, flaky), OILY (shiny T-zone, enlarged pores), COMBINATION (oily T-zone, dry cheeks), NORMAL (balanced). Wash your face, wait 1 hour — your skin will tell you its type.' },
  { id: 'l_hydration', title: 'Hydration from inside', description: 'Water + electrolytes: the skin glow secret.', durationSeconds: 40, goal: 'skin', difficulty: 'beginner', icon: '💧', content: 'Your skin is 64% water. Dehydration = dull, tight skin. Aim for 2L/day. Add a pinch of salt or lemon for electrolytes. Herbal teas count! Coffee and alcohol dehydrate — balance them with extra water.' },
  { id: 'l_double_cleanse', title: 'Double cleansing 101', description: 'Why washing your face once isn\'t enough in the evening.', durationSeconds: 50, goal: 'skin', difficulty: 'intermediate', icon: '🧴', content: 'Step 1: Oil cleanser removes makeup, sunscreen, sebum. Step 2: Water-based cleanser cleans your actual skin. This two-step method ensures deep cleanliness without over-stripping. Only needed at night.' },
  { id: 'l_ingredients', title: '5 ingredients to know', description: 'Niacinamide, retinol, vitamin C, AHA, hyaluronic acid.', durationSeconds: 55, goal: 'skin', difficulty: 'intermediate', icon: '🧪', content: 'NIACINAMIDE: Pores & redness. RETINOL: Anti-aging (start slow!). VITAMIN C: Brightening. AHA: Exfoliation. HYALURONIC ACID: Hydration. Start with one at a time. Patch test always!' },
  { id: 'l_skin_barrier', title: 'Your skin barrier matters', description: 'What it is, why it breaks, and how to fix it.', durationSeconds: 52, goal: 'skin', difficulty: 'intermediate', icon: '🛡️', content: 'Your skin barrier is a protective layer of lipids. When damaged: redness, irritation, breakouts. Causes: over-exfoliating, harsh products. Fix: gentle cleanser, ceramide moisturizer, skip actives for 2 weeks.' },
  { id: 'l_sleep_skin', title: 'Sleep & skin connection', description: 'Why beauty sleep is real science, not a myth.', durationSeconds: 45, goal: 'skin', difficulty: 'beginner', icon: '🌙', content: 'During sleep, blood flow increases to skin, collagen is rebuilt, damage is repaired. Less than 6h sleep = more wrinkles, uneven tone. Tip: Sleep on your back to prevent pillow creases.' },
  { id: 'l_diet_skin', title: 'Foods for glowing skin', description: 'What to eat (and avoid) for better skin.', durationSeconds: 48, goal: 'skin', difficulty: 'beginner', icon: '🥗', content: 'EAT MORE: Fatty fish (omega-3), avocado, nuts, berries, sweet potatoes. LIMIT: Sugar (causes glycation), dairy (may trigger acne), processed foods. Your gut health = your skin health.' },
  { id: 'l_acne_basics', title: 'Acne basics', description: 'Why pimples happen and simple steps to manage them.', durationSeconds: 55, goal: 'skin', difficulty: 'beginner', icon: '🔴', content: 'Acne = clogged pores + bacteria + inflammation. Don\'t pick! Use salicylic acid (BHA) for blackheads, benzoyl peroxide for inflammation. Change your pillowcase. If severe: see a dermatologist.' },
  { id: 'l_minimal_routine', title: 'The 3-step routine', description: 'Cleanser, moisturizer, sunscreen — that\'s all you need.', durationSeconds: 42, goal: 'skin', difficulty: 'beginner', icon: '3️⃣', content: 'Morning: Cleanser → Moisturizer → Sunscreen. Night: Cleanser → Moisturizer. That\'s it! You don\'t need 10 products. Master these 3 first. Add serums later when your routine is solid.' },

  // HAIR (8)
  { id: 'l_hair_types', title: 'Understanding hair types', description: 'Straight, wavy, curly, coily — each needs different care.', durationSeconds: 50, goal: 'hair', difficulty: 'beginner', icon: '💇', content: 'Type 1: Straight (gets oily fast). Type 2: Wavy (frizz-prone). Type 3: Curly (needs moisture). Type 4: Coily (most fragile). Know your type to pick the right products. The curl pattern chart goes from 1A to 4C.' },
  { id: 'l_shampoo_truth', title: 'Shampoo truths', description: 'How often should you really wash your hair?', durationSeconds: 45, goal: 'hair', difficulty: 'beginner', icon: '🧴', content: 'Most people over-shampoo. Oily hair: every 2 days. Normal: every 3 days. Dry/curly: 1–2x per week. Shampoo ROOTS only. Conditioner ENDS only. Sulfate-free is gentler. Your hair needs its natural oils.' },
  { id: 'l_hair_oils', title: 'Best oils for your hair', description: 'Coconut, argan, jojoba — which one is for you?', durationSeconds: 50, goal: 'hair', difficulty: 'intermediate', icon: '🫒', content: 'COCONUT: Penetrates hair shaft, great for protein loss. ARGAN: Lightweight, adds shine (all types). JOJOBA: Mimics natural oils, great for scalp. CASTOR: Thick, promotes growth (use on scalp). Apply to damp hair, avoid roots if oily.' },
  { id: 'l_heat_damage', title: 'Heat damage prevention', description: 'How to use styling tools without destroying your hair.', durationSeconds: 48, goal: 'hair', difficulty: 'intermediate', icon: '🔥', content: 'Always use heat protectant spray. Max temperature: fine hair 300°F, thick hair 380°F. Don\'t pass over same section twice. Air dry 80% first, then style. Give hair heat-free days. Silk pillowcase reduces friction damage.' },
  { id: 'l_scalp_health', title: 'Scalp is skin too', description: 'Why scalp care is the foundation of great hair.', durationSeconds: 45, goal: 'hair', difficulty: 'beginner', icon: '🧠', content: 'Healthy hair starts at the scalp. Flakes? Could be dry scalp OR dandruff (different things!). Massage scalp daily to boost blood flow. Don\'t scratch — it causes inflammation. ACV rinse once a month helps balance pH.' },
  { id: 'l_hair_growth', title: 'Hair growth facts', description: 'What actually works and what\'s just marketing.', durationSeconds: 52, goal: 'hair', difficulty: 'intermediate', icon: '📈', content: 'Hair grows ~0.5 inches/month. WORKS: biotin, iron, protein, scalp massage, reducing breakage. DOESN\'T WORK: most growth serums, cutting makes it grow faster (myth). Focus on keeping what you grow — prevent breakage!' },
  { id: 'l_split_ends', title: 'Split ends explained', description: 'Why they happen and what you can actually do about them.', durationSeconds: 40, goal: 'hair', difficulty: 'beginner', icon: '✂️', content: 'Split ends can\'t be repaired — only trimmed. Prevention: moisturize, avoid heat, use wide-tooth comb, trim every 8–12 weeks. Leave-in conditioners help prevent new splits. Silk pillowcases reduce friction while sleeping.' },
  { id: 'l_winter_hair', title: 'Seasonal hair care', description: 'Why your hair changes with the seasons and how to adapt.', durationSeconds: 45, goal: 'hair', difficulty: 'intermediate', icon: '🌨️', content: 'Winter: More moisture, less washing, humidifier at home. Summer: UV protection, rinse after swimming, lighter products. Fall: Deep condition to repair summer damage. Spring: Clarify and prep for humidity.' },

  // POSTURE (8)
  { id: 'l_posture_myths', title: 'Posture myths debunked', description: 'Sit up straight? Not always. Here\'s what really works.', durationSeconds: 52, goal: 'posture', difficulty: 'beginner', icon: '❌', content: 'MYTH: "Perfect" posture exists. TRUTH: Best posture is your next posture — MOVE often. MYTH: Slouching causes pain. TRUTH: Staying in ANY position too long causes pain. MYTH: You need a special chair. TRUTH: You need movement breaks every 30 min.' },
  { id: 'l_desk_setup', title: 'Perfect desk setup', description: 'Monitor height, chair position, and keyboard placement.', durationSeconds: 48, goal: 'posture', difficulty: 'beginner', icon: '🖥️', content: 'Monitor: Top of screen at eye level, arm\'s length away. Chair: Feet flat, knees at 90°, back supported. Keyboard: Elbows at 90°, wrists neutral. Mouse: Close to keyboard. Take breaks every 30 min. Standing desk? Alternate sit/stand.' },
  { id: 'l_neck_tension', title: 'Why your neck hurts', description: 'Text neck, forward head — causes and quick fixes.', durationSeconds: 50, goal: 'posture', difficulty: 'beginner', icon: '🦢', content: 'Your head weighs 10–12 lbs. For every inch forward, add 10 lbs of stress on your neck. Phone at eye level! Chin tucks: pull chin back (make a double chin) — hold 5s, repeat 10x. Do this 3x daily. Relief in 2 weeks.' },
  { id: 'l_core_posture', title: 'Core = your natural brace', description: 'Why core strength is the foundation of good posture.', durationSeconds: 45, goal: 'posture', difficulty: 'intermediate', icon: '💪', content: 'Your core muscles wrap around your torso like a corset. Weak core = your spine has no support = pain. Best exercises: plank, dead bug, bird dog. Just 5 min/day makes a huge difference. No crunches needed!' },
  { id: 'l_upper_cross', title: 'Upper cross syndrome', description: 'Rounded shoulders? Here\'s what\'s happening and how to fix it.', durationSeconds: 55, goal: 'posture', difficulty: 'intermediate', icon: '🔄', content: 'TIGHT: Chest muscles + upper traps. WEAK: Deep neck flexors + mid-back muscles. This creates rounded shoulders and forward head. Fix: Stretch chest (doorway stretch), strengthen mid-back (rows, face pulls), chin tucks for neck.' },
  { id: 'l_breathing_posture', title: 'Breathing & posture link', description: 'How you breathe affects how you stand and feel.', durationSeconds: 42, goal: 'posture', difficulty: 'beginner', icon: '🫁', content: 'Chest breathing = tight neck, elevated shoulders, anxiety. Diaphragmatic breathing = relaxed neck, better posture, calm mind. Place hand on belly. Inhale: belly rises. Exhale: belly falls. Practice 5 min daily. Game changer.' },
  { id: 'l_sleep_posture', title: 'Sleep position matters', description: 'How your sleeping position affects your back and neck.', durationSeconds: 48, goal: 'posture', difficulty: 'beginner', icon: '🛌', content: 'BEST: On your back (supports natural curve). GOOD: Side (pillow between knees). WORST: Stomach (twists neck). Pillow height: should keep spine neutral. Mattress: medium-firm for most people. Try new position for 2 weeks.' },
  { id: 'l_movement_snacks', title: 'Movement snacks', description: 'Micro-breaks throughout the day that make a real difference.', durationSeconds: 45, goal: 'posture', difficulty: 'beginner', icon: '🍿', content: 'A "movement snack" is 1–2 minutes of activity. Every 30 minutes: stand up, reach overhead, twist, squat, walk. Set a timer! These micro-breaks prevent stiffness better than one long workout. Your body craves variety.' },

  // STYLE (2)
  { id: 'l_capsule_wardrobe', title: 'Capsule wardrobe intro', description: '15 pieces, infinite outfits. The minimalist approach.', durationSeconds: 55, goal: 'style', difficulty: 'beginner', icon: '👔', content: 'A capsule wardrobe = 15–30 versatile pieces that all mix and match. Start with neutrals (black, white, navy, beige). Add 3–4 accent colors. Quality > quantity. One great pair of jeans > five cheap ones. You\'ll save money AND time.' },
  { id: 'l_color_theory', title: 'Colors that suit you', description: 'Warm vs. cool undertones and how to dress for yours.', durationSeconds: 50, goal: 'style', difficulty: 'intermediate', icon: '🎨', content: 'Check your wrist veins: Blue/purple = cool undertone. Green = warm. Both = neutral. Cool: wear jewel tones (emerald, sapphire). Warm: wear earth tones (olive, terracotta). Neutral: lucky you — most colors work!' },

  // ENERGY (2)
  { id: 'l_circadian', title: 'Your body clock', description: 'How circadian rhythm affects energy, skin, and mood.', durationSeconds: 50, goal: 'energy', difficulty: 'beginner', icon: '⏰', content: 'Your body runs on a 24-hour clock. Morning sunlight sets it. Blue light at night breaks it. Best energy: wake and sleep at consistent times. Morning sunlight within 30 min of waking = better sleep, mood, and even skin repair.' },
  { id: 'l_energy_foods', title: 'Foods for steady energy', description: 'Avoid crashes with the right fuel throughout the day.', durationSeconds: 45, goal: 'energy', difficulty: 'beginner', icon: '🍌', content: 'AVOID: Sugar spikes (candy, white bread, juice). EAT: Complex carbs + protein + healthy fat. Examples: oatmeal + nuts, apple + peanut butter, salad + chicken. Eat every 3–4 hours. Stay hydrated. Caffeine before 2 PM only.' },
];

// --- Programs (2 MVP) ---

export const PROGRAMS: Program[] = [
  {
    id: 'skin-glow-basics',
    title: 'Skin Glow Basics',
    description: 'Your 15-day essentials for a healthy, glowing complexion. Perfect for beginners who want to build a simple, effective skincare routine.',
    durationDays: 15,
    difficulty: 'beginner',
    goals: ['skin'],
    isPremium: false,
    habits: [
      'h_face_wash_am', 'h_moisturize_am', 'h_sunscreen', 'h_face_wash_pm',
      'h_moisturize_pm', 'h_lip_balm', 'h_water_intake', 'h_no_touch_face',
      'h_clean_pillowcase', 'h_cold_water_rinse', 'h_green_tea', 'h_hand_cream',
      'h_body_lotion', 'h_toner', 'h_serum',
    ],
    lessons: [
      'l_why_sunscreen', 'l_skin_types', 'l_hydration', 'l_minimal_routine',
      'l_sleep_skin', 'l_diet_skin', 'l_skin_barrier', 'l_acne_basics',
      'l_double_cleanse', 'l_ingredients',
    ],
    icon: '✨',
    color: '#FBBF24',
  },
  {
    id: 'posture-reset',
    title: 'Posture Reset',
    description: '20 days to stand taller and feel stronger. Perfect for desk workers and anyone who wants to improve their posture.',
    durationDays: 20,
    difficulty: 'beginner',
    goals: ['posture'],
    isPremium: false,
    habits: [
      'h_posture_check', 'h_morning_stretch', 'h_desk_break', 'h_wall_angel',
      'h_plank', 'h_chin_tuck', 'h_hip_flexor', 'h_thoracic_ext',
      'h_shoulder_rolls', 'h_walk_tall', 'h_screen_height', 'h_glute_bridge',
      'h_standing_desk', 'h_body_scan', 'h_dead_hang',
    ],
    lessons: [
      'l_posture_myths', 'l_desk_setup', 'l_neck_tension', 'l_core_posture',
      'l_upper_cross', 'l_breathing_posture', 'l_sleep_posture', 'l_movement_snacks',
    ],
    icon: '🧘',
    color: '#34D399',
  },
  {
    id: 'hair-care-essentials',
    title: 'Hair Care Essentials',
    description: '12 days to healthier, stronger hair. Learn the fundamentals of hair care from scalp health to styling tips.',
    durationDays: 12,
    difficulty: 'beginner',
    goals: ['hair'],
    isPremium: false,
    habits: [
      'h_scalp_massage', 'h_gentle_brush', 'h_hair_oil', 'h_cold_rinse_hair',
      'h_no_heat', 'h_deep_condition', 'h_silk_pillowcase', 'h_trim_check',
      'h_hair_vitamins', 'h_loose_hairstyle', 'h_wash_routine',
    ],
    lessons: [
      'l_hair_types', 'l_shampoo_truth', 'l_hair_oils', 'l_heat_damage',
      'l_scalp_health', 'l_hair_growth', 'l_split_ends', 'l_winter_hair',
    ],
    icon: '💇',
    color: '#A78BFA',
  },
];
