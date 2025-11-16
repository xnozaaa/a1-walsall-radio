
<high_level_design>
## 1. Brand & Art Direction Overview

**Visual Style:**
- Premium, sophisticated dark theme transportation brand
- Bold, modern typography with sharp contrast between white and signature yellow (#FFE600)
- High-quality photography showcasing executive vehicles, professional drivers, and urban London settings
- Clean, minimalist layouts with generous whitespace
- Strong emphasis on premium service positioning through imagery and typography
- Cinematic full-screen hero sections with video backgrounds
- Professional, corporate aesthetic balanced with approachable, service-oriented messaging

**Design Philosophy:**
- Dark background (#000000) as primary canvas creating luxury feel
- Yellow accent color for CTAs and key messaging providing energy and visibility
- Photography-first approach with large, immersive images
- Clear information hierarchy with oversized titles
- Consistent use of uppercase typography for emphasis
- Modern, app-first user experience emphasis

## 2. Color Palette (Dark Theme)

| Token | HEX / RGB | Usage | Notes |
|-------|-----------|-------|-------|
| Primary Black | #000000 | Background, primary text | Pure black for maximum contrast |
| Primary White | #FFFFFF | Text, borders, icons | High contrast on black |
| Accent Yellow | #FFE600 / rgb(255, 230, 0) | CTAs, highlights, emphasis text | Brand signature color |
| White 64% | rgba(255, 255, 255, 0.64) | Secondary text, borders, subtle elements | Reduced opacity for hierarchy |
| Grey (Light) | #F5F5F5 - #E0E0E0 | Subtle backgrounds, disabled states | Minimal usage |
| Dark Grey | #1A1A1A - #2A2A2A | Card backgrounds, subtle sections | Slightly elevated from pure black |

## 3. Typography Scale

**Font Family:**
- Primary: Custom font (appears to be a modern sans-serif, possibly custom "Steagal" as referenced in body class)
- Fallback: System sans-serif stack

**Type Scale:**

| Element | Size | Weight | Transform | Spacing |
|---------|------|--------|-----------|---------|
| 3XL Title | 80-120px | Medium (500) | Uppercase | Tight (-0.02em) |
| LG Title | 56-72px | Medium (500) | Uppercase | Tight |
| MD Title | 40-48px | Medium (500) | Uppercase | Normal |
| SM Title | 32-36px | Medium (500) | Uppercase | Wide (0.05em) |
| 2SM Title | 24-28px | Medium (500) | Uppercase | Normal |
| 1SM Title | 20-24px | Medium (500) | Uppercase | Normal |
| Body XL | 20-24px | Regular (400) | None | Normal (1.5) |
| Body LG | 18-20px | Regular (400) | None | Normal (1.5) |
| Body MD | 16px | Regular (400) | None | Normal (1.5) |
| Body SM | 14px | Regular (400) | None | Normal (1.4) |
| Button Text | 14-16px | Medium (500) | Uppercase | Wide (1.4px - 1.6px) |

## 4. Spacing & Layout Grid

**Container System:**
- Max-width: 1440px (site container)
- Horizontal padding: 16px (mobile), 32px (tablet), 80px (desktop)
- Vertical sections: 48px (mobile), 112px (desktop)

**Grid System:**
- 12-column fluid grid
- Gutter: 24px (mobile), 32px (desktop)
- Column-based layouts for service cards (3-column on desktop)

**Spacing Scale:**
- 4px base unit
- Common spacing: 16px, 24px, 32px, 48px, 64px, 96px, 112px

**Component Spacing:**
- Section padding top/bottom: 48px (mobile), 112px (desktop)
- Card gap: 24px (mobile), 32px (desktop)
- Element margin bottom: 16px, 24px, 32px, 48px
- Button padding: 16px 32px

## 5. Visual Effects & Treatments

**Shadows:**
- Minimal shadow usage
- Subtle elevation: 0 2px 8px rgba(0, 0, 0, 0.1)

**Border Radius:**
- Buttons: 0px (sharp corners)
- Cards/Images: 0px (sharp, modern aesthetic)
- No rounded corners throughout

**Borders:**
- 1px solid white at 64% opacity for dividers
- Used sparingly on header bottom, card separators

**Gradients:**
- Hero overlay: Linear gradient from transparent to black
- Mobile hero: rgba(0, 0, 0, 0.6) overlay
- Video hero: Subtle bottom-to-top black gradient

**Transitions:**
- Duration: 300ms (fast), 500ms (medium), 700ms (slow)
- Easing: cubic-bezier (custom bezier curves)
- Hover states: opacity change (0.6), scale transforms (1.25x for images)
- Menu animations: 700ms slide-in transitions

**Image Treatments:**
- Hover scale: transform scale(1.25) over 700ms
- Overflow hidden on containers
- Object-fit: cover for full-bleed images
- High-quality photography with professional color grading

## 6. Component Styles

**Buttons:**
- Primary (Yellow): bg-yellow, black text, uppercase, 14-16px, padding 16px 32px, hover opacity 0.6
- Secondary (Clear/Outline): transparent bg, white border, white text, uppercase, hover opacity 0.6
- Icon buttons: Right-aligned arrow SVG, inline with text
- No border radius (sharp corners)
- Letter-spacing: 1.4px - 1.6px

**Navigation:**
- Fixed header: 64px height (mobile), 108px (desktop)
- Transparent/black background with transition
- Hamburger menu: 3-line animated to X
- Slide-out menu panel: Full height, left-aligned, 605px max-width
- Menu items: Large title size, white text, yellow hover
- Submenu: Expandable accordion with opacity transitions

**Cards:**
- Dark/transparent backgrounds
- Image section: Fixed aspect ratio containers
- Text section: Padding 24px, white title, grey description
- Hover: Image scale effect, button opacity change
- No shadows or borders

**Hero Section:**
- Full viewport height
- Video background with overlay
- Centered content with large titles
- Text ticker animation for rotating headlines
- CTA button prominent below headline
- Mobile: Static background with gradient overlay

**Icons:**
- Outlined style, 40px - 48px size
- Yellow color for feature icons
- White for UI elements
- Consistent stroke width

**Forms:**
- Minimal styling
- White borders (1px)
- White text input
- Focus states with yellow accent
- Label text: 14px, uppercase, letter-spacing

**Feature Grid:**
- 6-column layout on desktop
- Icon + title + description pattern
- Yellow icons, white titles, grey description text
- Even spacing between items

**Carousel/Slider:**
- Custom controls with arrow icons
- Progress indicator: Line-based, yellow active state
- Horizontal scroll on mobile
- Navigation arrows: Outlined style, hover opacity

## 7. Site Sections (In Order)

1. **Cookie Banner** (Overlay)
   - Fixed position overlay
   - Black background, white text
   - Yellow "Accept all" button
   - Clear "Reject" button outline style

2. **Header/Navigation**
   - Fixed top navigation
   - Logo center (desktop), left (mobile)
   - Menu button right (hamburger)
   - Sign In + Book Now CTAs (desktop right)
   - Border bottom on desktop
   - Slide-out menu panel with submenu structure

3. **Hero Section (Video Background)**
   - Full-screen video hero
   - Text ticker animation (desktop)
   - Large title with yellow accent text
   - Subtitle description
   - Primary CTA button
   - Gradient overlay bottom

4. **Services Carousel**
   - Section title: "Our Services" (white/yellow split)
   - Horizontal card carousel
   - 4 service cards: Standard, Executive, Courier, Black Taxi
   - Large images, titles, descriptions, CTA links
   - Custom navigation arrows
   - Progress bar indicator

5. **Airport Transfer Section**
   - Large lifestyle image (couple with luggage)
   - Title + description layout
   - Yellow CTA button
   - Side-by-side layout (desktop)
   - Stacked on mobile

6. **Business Section**
   - Background image with person working in car
   - Title + description
   - CTA button
   - Dark overlay on image

7. **Drive With Addison Lee Section**
   - Large vehicle image background
   - Title + description
   - Yellow CTA button
   - Similar treatment to business section

8. **What Sets Us Apart**
   - Section title with yellow accent
   - 6-feature grid with icons
   - Trusted, Reliable, Premium, Sustainable, Convenient, Safe
   - Yellow outlined icons
   - Short descriptions

9. **Features Carousel**
   - Rotating feature cards
   - Image + text combinations
   - Award Winning, Executive Service, Quality Assured
   - Counter indicator (e.g., "3/3")
   - Navigation arrows

10. **Business Accounts Deep Dive**
    - Title + extended description
    - Benefits list
    - Yellow CTA button
    - Text-focused section

11. **Download App Section**
    - Split layout: phone mockup image + text
    - Title with yellow accent
    - Description of app features
    - Yellow download CTA button
    - App store badges (implied)

12. **About Addison Lee**
    - Vehicle interior/branding image
    - Company description
    - Multi-paragraph content
    - Learn more CTA link
    - Emphasis on 50 years experience, services offered

13. **Drive With Addison Lee (Driver Recruitment)**
    - Title with yellow accent
    - Description of driver opportunities
    - Yellow CTA button
    - Dark background section

14. **Footer**
    - Newsletter signup form
    - Multi-column link structure:
      * Company (Get quote, Drive with us, Careers, Blog)
      * About (About us, Accreditations, Sign Up, App download)
      * Support (Support, Contact, FAQs)
      * Services (Car, Courier, Airport, Executive)
      * Legal Terms (T&Cs, Privacy, Tax, Modern Slavery, Cookie Policy)
    - Payment method icons (Mastercard, Visa, PayPal, Google Pay, Apple Pay, Amex, Amazon Pay)
    - Copyright notice
    - Social media icons
    - Dark background, white text, yellow links on hover
</high_level_design>

<theme>
dark
</theme>

<sections>
<clone_section>
    <file_path>src/components/sections/header-navigation.tsx</file_path>
    <design_instructions>
Clone the fixed header navigation bar with black background (#000000), featuring the Addison Lee logo centered on mobile and left-aligned on desktop, a hamburger menu button (3 horizontal lines with smooth rotation animation to X on click), "SIGN IN" and "BOOK NOW" (yellow #FFD700) call-to-action buttons on desktop (right-aligned), and a slide-out mobile menu panel from the left with full navigation links including expandable submenus. Header height: 64px mobile, 108px desktop. Include white border-bottom on desktop. Logo width: 144px desktop, mobile logo variation provided. Menu panel: full-height, black background, slides in from left with 700ms cubic-bezier transition, z-index 10000.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/addison-lee-logo-1.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/addison-lee-mobile-2.svg"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/hero-video-section.tsx</file_path>
    <design_instructions>
Clone the full-screen hero section with autoplay background video, dark gradient overlay (bottom: #000000 to transparent), centered content positioned at bottom on mobile and center on desktop. Large headline split into two lines: "THE BUSINESS SERVICE" (white, uppercase) and "YOU DESERVE" (yellow #FFD700, uppercase). Font: bold, 72px desktop / 40px mobile, tight line-height. Animated text ticker on desktop cycling through service types. Subheading paragraph in white (20px, regular weight). Yellow CTA button "GET A QUOTE" with right arrow icon. Video object-fit: cover, full width/height. Gradient overlay: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%). Padding bottom: 144px mobile for spacing above next section.
    </design_instructions>
    <assets>["https://www.addisonlee.com/wp-content/uploads/2025/03/AL2025_030_Homepage_Video_CAR_B2B_DRAFT1-1.mp4"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/services-carousel.tsx</file_path>
    <design_instructions>
Clone the services showcase section with black background, "OUR SERVICES" heading (white "OUR", yellow "SERVICES", uppercase, bold, 56px desktop / 32px mobile). Horizontal scrolling carousel with navigation arrows (< >) on desktop, touch-swipe enabled on mobile. Four service cards: Standard, Executive, Courier, Black Taxi. Each card: large image (600x600px aspect ratio, hover scale 1.25 with 700ms transition), service title (uppercase, white, bold, 24px), description text (grey #B3B3B3, 18px), "LEARN MORE" button (transparent with white text, right arrow icon). Cards display 3 across on desktop, single column scrollable on mobile. Bottom progress indicator bar. Spacing: 48px top/bottom padding, 32px gap between cards.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/images/600x600_11-Addison-Lee-Car-iD4-electric-vehicle-5.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/images/600x600_24-Addison-Lee-Executive-Car-6.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/images/600x600_27-Addison-Lee-Courier-in-London-7.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/images/600x600_TC_03-Black-Taxi-with-Roundel-8.jpg"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/airport-transfer-section.tsx</file_path>
    <design_instructions>
Clone the full-width image section showcasing airport transfer service with couple walking with luggage and black Audi car in background. Heading "BOOK YOUR AIRPORT TRANSFER" (white "BOOK YOUR", yellow "AIRPORT TRANSFER", uppercase, bold). Paragraph text describing Heathrow, Gatwick, Stansted, Luton services with fixed pricing and 100% on-time guarantee. Yellow "FIND OUT MORE" button with right arrow. Layout: image on desktop spans 60% width right side, text content 40% left with black background. Mobile: stacked vertically with image first. Padding: 64px vertical, 32px horizontal. Text color: white on black, 18px body text.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/images/airport-transfer-9.jpg"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/business-accounts-section.tsx</file_path>
    <design_instructions>
Clone the business accounts promotional section with split layout (image 50%, content 50% on desktop, stacked on mobile). Professional image of businesswoman in car with laptop. Heading "BUSINESS ACCOUNTS" (white "BUSINESS", yellow "ACCOUNTS", uppercase, bold, 48px). Detailed paragraph describing corporate travel benefits, fixed rates, priority booking, dedicated account managers. Yellow CTA button "FIND OUT MORE" with arrow. Black background for text area. Image: 500x700px aspect ratio, object-fit cover. Mobile: image first, then content below. Padding: 80px vertical sections, 48px horizontal.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/images/business-accounts-10.jpg"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/driver-recruitment-section.tsx</file_path>
    <design_instructions>
Clone the driver recruitment section with dramatic vehicle image (VW Multivan on urban street with modern architecture). Heading "DRIVE WITH ADDISON LEE" (white "DRIVE WITH", yellow "ADDISON LEE", uppercase, bold). Description text inviting drivers to join UK's largest premium service. Yellow CTA button. Full-width image background with text overlay using dark gradient for readability. Image aspect: 1920x1080. Text positioned over darker left portion of image. Mobile: stronger gradient overlay for text legibility. Font sizes: 56px heading desktop / 36px mobile, 18px body text.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/images/1920x1080_15-Addison-Lee-multivan-in-London-11.jpg"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/features-grid-section.tsx</file_path>
    <design_instructions>
Clone the "WHAT SETS US APART" features section with black background, heading (white "WHAT SETS US", yellow "APART"). Six feature boxes in 3-column grid (desktop) / 2-column (tablet) / 1-column (mobile): Trusted (team icon), Reliable (user check icon), Premium (car icon), Sustainable (battery icon), Convenient (app icon), Safe (lock icon). Each feature: yellow icon (48px), bold white title (uppercase, 20px), grey description text (#B3B3B3, 16px). Icons are outlined SVG graphics in yellow. Grid gap: 48px vertical, 32px horizontal. Section padding: 96px vertical, max-width 1200px centered.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/team-3.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/user-4.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/car-5.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/battery-6.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/app-7.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/lock-8.svg"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/rotating-features-carousel.tsx</file_path>
    <design_instructions>
Clone the "OUR FEATURES" horizontal auto-scrolling carousel section with seamless infinite loop animation. Three repeating feature cards: "Award Winning", "Executive Service", "Quality Assured". Each card: white text heading (24px, bold, uppercase), descriptive text (16px, grey #B3B3B3), displayed on black background. Cards scroll continuously right-to-left with smooth animation, no gaps between loops. Section heading "OUR FEATURES" (white, uppercase, 16px, tracking wide). Image tiles showing executive cars and professional services. Auto-scroll speed: 30 seconds per full cycle. Cards width: 300px each with 24px gap.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/images/500x700_03-Addison-Lee-iD4-electric-Car-with-woman-12.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/images/500x700_09-Addison-Lee-executive-car-with-man-and--13.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/images/500x700_14-Addison-Lee-Car-multivan-in-London-City-14.jpg"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/app-download-section.tsx</file_path>
    <design_instructions>
Clone the app promotion section with split layout (mobile mockup image left 40%, content right 60% on desktop). Image shows phone displaying Addison Lee app map interface in someone's hand. Heading "DOWNLOAD OUR APP" (white "DOWNLOAD", yellow "OUR APP", uppercase, bold, 56px desktop). Description of app features: book airport transfers, business trips, London taxis in few taps. Yellow "DOWNLOAD" button with right arrow linking to app stores. Black background, white body text (18px), mobile-first responsive stacking. Image aspect: 500x700px portrait orientation. Section padding: 96px vertical.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/images/download-app-15.jpg"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/about-section.tsx</file_path>
    <design_instructions>
Clone the "ABOUT ADDISON LEE" section with split layout (text content left 50%, image right 50% on desktop). Image shows Addison Lee branded VW van from driver's perspective through windshield. Heading "ABOUT ADDISON LEE" (white "ABOUT", yellow "ADDISON LEE", uppercase, bold, 48px). Multiple paragraphs describing 50 years experience, leading private hire provider, airport transfers, executive cars, chauffeur services, corporate accounts. "LEARN MORE" button in yellow. Black background, white/grey text, 16px line-height 1.6. Image: inside vehicle perspective shot. Mobile: text first, image below. Section padding: 80px vertical, max-width 1400px.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/images/about-AL-16.jpg"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/footer-newsletter-signup.tsx</file_path>
    <design_instructions>
Clone the footer section starting with newsletter signup area. Black background, heading "DRIVE WITH ADDISON LEE" (white "DRIVE WITH", yellow "ADDISON LEE"). Paragraph inviting to join UK's largest service. Email signup form with two input fields (First Name, Email Address) with white borders and transparent backgrounds, white text. Yellow "SIGN UP" button. Privacy policy disclaimer text below in small grey font (12px). Payment method icons displayed: Mastercard, Visa, PayPal, Google Pay, Apple Pay, Amex, Amazon Pay SVG logos in original brand colors, 40px height, spaced evenly. Legal text and copyright at bottom.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/mastercard_logo-9.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/VISA_logo-10.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/PayPal_logo-11.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/Googlepay-12.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/ApplePay_logo-13.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/BLUEAmerican_Express_logo-14.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/amazonpay-15.svg"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/footer-navigation.tsx</file_path>
    <design_instructions>
Clone the footer navigation section with five columns on desktop (COMPANY, ABOUT, SUPPORT, SERVICES, LEGAL TERMS), stacked on mobile. Black background, white column headings (uppercase, bold, 14px tracking wide), grey link text (#B3B3B3, 14px) with white hover state. Links include: Get a quote, Drive with us, Careers, Blog, About us, Accreditations, Sign Up, Download App, Support, Contact us, FAQs, Car Services, Courier Services, Airport Transfers, Executive Chauffeurs, Terms & Conditions, Privacy Policy, Tax Strategy, Modern Slavery, Cookie Policy. Column gap: 64px desktop. Bottom copyright text "© 2025 Addison Lee Limited. All rights reserved." in small grey font (12px).
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/cookie-consent-banner.tsx</file_path>
    <design_instructions>
Clone the cookie consent modal that appears on initial page load. Fixed position at bottom/center of screen on mobile, appears as card overlay. Dark grey/black background (#1A1A1A), white text. Heading "Choose your cookies" (bold, 18px). Explanatory text about cookies with link to cookie policy (yellow underline on hover). Two buttons: "ACCEPT ALL" (yellow background #FFD700, black text, bold) and "REJECT NON-ESSENTIAL COOKIES" (transparent with white border, white text). Buttons full-width on mobile, inline on desktop. Border-radius: 8px, padding: 32px, box-shadow for elevation. Z-index: 99999 to appear above all content.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>
</sections>
