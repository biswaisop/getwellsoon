# 🏔️ The Trail Back

A calm, minimal, and personal website crafted for **Alisha** from **Biswadip**.

The website frames her recovery as a peaceful mountain trail back to health, with a scroll-linked sky that shifts gently from morning dawn to evening twilight.

---

## 🌿 The Sections (In Order)

1. **Hero**:
   - Title: *"Get well soon, Alisha"*
   - Sincere subtitle in Biswadip's voice
   - Dedication line: *"Made by Biswadip, for the girl who never backs down."*
   - Soft scroll cue.

2. **The Trail Back**:
   - 5 checkpoints with icons along a simple vertical path:
     - ⛺ **Base Camp**: Resting up and letting your body heal at its own pace.
     - 📈 **The Ridge**: Quiet days in bed, saving up your energy for later.
     - ☀️ **The Clearing**: Feeling a little more like yourself every single day.
     - 🥾 **The Trailhead**: Ready to step outside again whenever you feel ready.
     - 🏔️ **The Summit**: Standing above the clouds once you're fully healed.

3. **A Few Notes For You**:
   - 5 tap-to-expand letters in handwritten (`Caveat`) font (3–5 sentences each):
     1. *Open when you need to rest*
     2. *Open when you feel low*
     3. *Open when you miss the outdoors*
     4. *Open when you can't sleep*
     5. *Open when you need a smile*

4. **Things I've Noticed About You**:
   - 4 short cards highlighting admired traits:
     - 🔥 *Your quiet grit*
     - ✨ *The energy you bring*
     - 🧭 *How you look at trails*
     - ❤️ *How resilient you are*

5. **Mini Game: "Reach the Summit"**:
   - A calm, thumb-friendly tap game designed for resting in bed.
   - Tap anywhere on the path to step forward along the climb.
   - 4 milestone collectibles with personal notes from Biswadip:
     - 🌸 *Wildflower by the Path* (Step 5)
     - 💧 *Water Break at the Rock* (Step 10)
     - 📷 *Camera at the Viewpoint* (Step 14)
     - 🚩 *The Summit Cairn* (Step 18)
   - Reaching the summit shows: *"You made it. Rest well."*
   - Zero timers, zero penalties, no game over.

6. **Evening Campsite (A Quiet Ending)**:
   - A peaceful bedtime letter from Biswadip in handwritten Caveat font, directly readable under the twilight mountain sky:
     > *"There is nothing you have to prove, nowhere you have to rush to, and no mountains to climb today. Just resting and letting your body heal is more than enough."*
     >
     > *"Thinking of you always, Biswadip"*
   - Bedside sign-off: *"Sleep well. The world will be right here when you wake up."*

---

## 🎨 Design & Alignment
- **Single Centered Column**: `max-w-md sm:max-w-lg mx-auto px-6 py-24` with uniform vertical rhythm.
- **Unified Card Style**: Consistent `.trail-card` (`rounded-2xl`, subtle border, soft shadow, backdrop blur) across all sections.
- **High Contrast at Twilight**: Crisp white headings and readable body text against the twilight mountain sky.
- **Soft Ambient Motion**: Sky shift, slow fade-in on scroll only. Full `prefers-reduced-motion` support.

---

## ✏️ How to Personalize Content (`src/data/content.ts`)

Open [`src/data/content.ts`](src/data/content.ts) (or `data/content.ts`). All text has clear `TODO:` comments:

- **Hero subtitle & dedication**: In `content.hero`.
- **Checkpoint lines**: In `content.trail`.
- **5 Letters**: In `content.letters` (customize with real memories).
- **Things I've Noticed**: In `content.noticedCards`.
- **Game notes**: In `content.summitGame.collectibles`.
- **Ending letter**: In `content.ending`.

---

## 🚀 Running Locally & Deploying

```bash
# Start dev server
npm run dev

# Run lint and production build
npm run lint
npm run build
```

Open [http://localhost:3000](http://localhost:3000) or test on your phone over Wi-Fi (`http://192.168.0.4:3000`). Ready to deploy to Vercel.
