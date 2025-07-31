import { useParams, Navigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Calendar,
  Clock,
  User,
  Heart,
  Eye,
  Share2,
  BookmarkPlus,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  category: string;
  tags: string[];
  publishDate: Date;
  readTime: number;
  image: string;
  featured: boolean;
  views: number;
  likes: number;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Post-Surgery Recovery: Essential Tips for Optimal Healing",
    excerpt:
      "Learn the most important steps to ensure a smooth recovery after plastic surgery, from proper wound care to nutrition and rest.",
    content: `Recovery after plastic surgery is crucial for achieving the best possible results. Whether you've undergone a facelift, rhinoplasty, or body contouring procedure, following proper post-operative care guidelines can significantly impact your healing process and final outcomes.

## The First 24-48 Hours

The immediate post-operative period is critical for setting the foundation for successful healing. During this time, your body begins the complex process of tissue repair and inflammation response.

**Rest and Positioning**: Keep your head elevated when lying down, especially after facial procedures. This helps reduce swelling and promotes proper drainage. Use 2-3 pillows or sleep in a recliner if recommended by your surgeon.

**Pain Management**: Take prescribed pain medications as directed. Don't wait for pain to become severe before taking medication, as it's more effective when used preventatively.

**Wound Care**: Follow your surgeon's specific instructions for cleaning and caring for incision sites. Keep dressings clean and dry, and report any signs of infection immediately.

## Week 1-2: Initial Recovery Phase

During the first week to two weeks, your body is actively healing and you'll notice gradual improvements in swelling and discomfort.

**Activity Restrictions**: Avoid strenuous activities, heavy lifting (typically over 10-15 pounds), and bending over. Light walking is encouraged to promote circulation and prevent blood clots.

**Nutrition**: Focus on a balanced diet rich in protein, vitamins C and E, and zinc to support tissue healing. Stay well-hydrated and avoid excessive sodium which can increase swelling.

**Follow-up Appointments**: Attend all scheduled follow-up visits. These appointments allow your surgeon to monitor your healing progress and address any concerns early.

## Weeks 3-6: Progressive Healing

As you enter the third week and beyond, you'll typically see more dramatic improvements in your appearance and comfort level.

**Gradual Activity Increase**: You may be cleared to return to work and light exercise, but always follow your surgeon's specific timeline. Every patient and procedure is different.

**Scar Management**: If applicable, your surgeon may recommend scar treatments such as silicone sheets, massage, or topical treatments to optimize healing.

**Sun Protection**: Protect healing skin from sun exposure, which can cause hyperpigmentation and affect final results.

## Long-term Recovery: Months 2-12

While initial healing occurs in the first few weeks, complete recovery and final results can take several months to a year, depending on the procedure.

**Patience with Results**: Swelling can take months to fully resolve, especially with facial procedures. Be patient with the process and trust in your surgeon's timeline.

**Maintaining Results**: Follow a healthy lifestyle, use quality skincare products, and consider maintenance treatments as recommended by your surgeon.

**Regular Check-ups**: Continue with scheduled follow-up appointments, even months after your procedure. Long-term monitoring ensures optimal results and addresses any late-developing concerns.

## Warning Signs to Watch For

Contact your surgeon immediately if you experience:
- Excessive bleeding or wound drainage
- Signs of infection (fever, increased redness, warmth, or pus)
- Severe or worsening pain not controlled by medication
- Any concerning changes in your incision sites

## Mental and Emotional Recovery

Recovery isn't just physical – it's also emotional. It's normal to experience a range of emotions during recovery, from excitement about your results to temporary feelings of regret or anxiety. This is completely normal and typically resolves as you heal and see your final results.

Remember, every patient's recovery is unique. While these guidelines provide a general framework, always follow your surgeon's specific instructions for your individual case. Open communication with your surgical team is key to a successful recovery and achieving the beautiful, natural-looking results you desire.`,
    author: "Dr. Maria Santos",
    authorRole: "Lead Plastic Surgeon",
    category: "Recovery Tips",
    tags: ["recovery", "post-surgery", "healing", "care"],
    publishDate: new Date("2024-01-20"),
    readTime: 8,
    image:
      "https://images.pexels.com/photos/4421545/pexels-photo-4421545.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    featured: true,
    views: 2450,
    likes: 186,
  },
  {
    id: "2",
    title:
      "Understanding Rhinoplasty: What to Expect Before, During, and After",
    excerpt:
      "A comprehensive guide to nose surgery, including preparation, the procedure itself, and what to expect during recovery.",
    content: `Rhinoplasty, commonly known as a nose job, is one of the most popular plastic surgery procedures worldwide. Whether you're considering rhinoplasty for aesthetic reasons or to improve breathing function, understanding what to expect throughout the entire process is essential for making an informed decision.

## What is Rhinoplasty?

Rhinoplasty is a surgical procedure that reshapes the nose by modifying the bone, cartilage, and soft tissue. It can address various concerns including:

- Reducing or increasing nose size
- Changing the angle between the nose and upper lip
- Narrowing the nostrils
- Correcting bumps or depressions on the bridge
- Improving breathing difficulties

## Types of Rhinoplasty

**Open Rhinoplasty**: Involves a small incision across the columella (the tissue between the nostrils). This approach provides the surgeon with better visibility and access to nasal structures, making it ideal for complex cases.

**Closed Rhinoplasty**: All incisions are made inside the nostrils, leaving no visible external scars. This technique is typically used for less complex procedures and results in reduced swelling and faster recovery.

## Before Your Surgery

### Consultation Process
During your initial consultation, your surgeon will:
- Evaluate your nasal anatomy and breathing
- Discuss your aesthetic goals and expectations
- Use computer imaging to show potential results
- Explain the surgical technique recommended for your case
- Review risks and recovery expectations

### Pre-operative Preparation
- Stop smoking at least 6 weeks before surgery
- Avoid blood-thinning medications and supplements
- Arrange for someone to drive you home and stay with you the first night
- Prepare your recovery space with extra pillows and easy-to-prepare foods

## The Surgical Procedure

Rhinoplasty typically takes 1-3 hours, depending on the complexity of your case. The procedure is usually performed under general anesthesia.

### Surgical Steps:
1. **Anesthesia administration** for your comfort throughout the procedure
2. **Incision placement** (open or closed technique)
3. **Reshaping the nasal structure** by removing or adding bone, cartilage, or tissue
4. **Closing the incisions** with fine sutures
5. **Placing a splint** to support the new shape during initial healing

## Recovery Timeline

### First Week
- **Days 1-2**: Rest with head elevated, expect moderate discomfort and nasal congestion
- **Day 5-7**: Splint and most sutures removed
- **Throughout week 1**: Bruising and swelling peak around day 3-4, then begin to improve

### Weeks 2-4
- Most visible swelling subsides
- Return to work (desk job) typically around day 7-10
- Light exercise may be permitted after 2 weeks

### Months 2-12
- **Month 2**: 80% of swelling resolved
- **Month 6**: 90% of swelling resolved
- **Month 12**: Final results apparent

## What to Expect After Surgery

### Immediate Post-operative Period
- Nasal packing may be placed temporarily
- Breathing through your mouth initially
- Some bloody drainage is normal for the first few days
- Pain is typically mild to moderate and well-controlled with medication

### Managing Expectations
- **Swelling**: Most noticeable in the first week, but subtle swelling can persist for months
- **Bruising**: Usually resolves within 1-2 weeks
- **Numbness**: Temporary numbness of the nose tip is common
- **Final Results**: May take up to a year to fully appreciate

## Potential Risks and Complications

As with any surgery, rhinoplasty carries some risks:
- Bleeding and infection
- Adverse reaction to anesthesia
- Persistent numbness
- Difficulty breathing through the nose
- Unsatisfactory aesthetic result requiring revision

## Choosing the Right Surgeon

Selecting a board-certified plastic surgeon with extensive rhinoplasty experience is crucial. Look for:
- Board certification in plastic surgery
- Before and after photos of their work
- Patient testimonials and reviews
- Hospital privileges
- Open communication and realistic expectations setting

## Tips for Optimal Results

- Follow all post-operative instructions carefully
- Attend all follow-up appointments
- Be patient with the healing process
- Protect your nose from trauma during recovery
- Maintain realistic expectations

Rhinoplasty can be a life-changing procedure when performed by an experienced surgeon on the right candidate. The key to success lies in clear communication, realistic expectations, and commitment to the recovery process. If you're considering rhinoplasty, schedule a consultation with a qualified plastic surgeon to discuss whether this procedure is right for you.`,
    author: "Dr. James Wilson",
    authorRole: "Facial Plastic Surgeon",
    category: "Procedures",
    tags: ["rhinoplasty", "nose surgery", "facial surgery"],
    publishDate: new Date("2024-01-18"),
    readTime: 12,
    image:
      "https://images.pexels.com/photos/32898294/pexels-photo-32898294.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    featured: false,
    views: 1820,
    likes: 142,
  },
  {
    id: "3",
    title: "Nutrition for Healthy Skin: Foods That Promote Natural Beauty",
    excerpt:
      "Discover which foods can help improve your skin's appearance and support your overall aesthetic goals naturally.",
    content: `Your skin reflects your overall health, and nutrition plays a vital role in maintaining healthy, glowing skin. Whether you're preparing for a cosmetic procedure or simply want to enhance your natural beauty, understanding how nutrition affects your skin can help you make informed dietary choices that support your aesthetic goals.

## The Skin-Nutrition Connection

The skin is your body's largest organ and requires proper nutrition to function optimally. What you eat directly impacts:
- Collagen production and skin elasticity
- Cellular repair and regeneration
- Protection against environmental damage
- Healing and recovery processes
- Overall skin tone and texture

## Essential Nutrients for Healthy Skin

### Vitamin C
This powerful antioxidant is crucial for collagen synthesis and protecting against free radical damage.

**Best Sources:**
- Citrus fruits (oranges, lemons, grapefruits)
- Berries (strawberries, blueberries, blackberries)
- Bell peppers
- Broccoli and leafy greens
- Kiwi fruit

### Vitamin E
Works synergistically with Vitamin C to protect skin from oxidative stress and supports healing.

**Best Sources:**
- Nuts and seeds (almonds, sunflower seeds)
- Avocados
- Olive oil
- Spinach
- Sweet potatoes

### Omega-3 Fatty Acids
Essential for maintaining skin barrier function and reducing inflammation.

**Best Sources:**
- Fatty fish (salmon, mackerel, sardines)
- Walnuts
- Flaxseeds and chia seeds
- Hemp seeds

### Zinc
Critical for wound healing, immune function, and protein synthesis.

**Best Sources:**
- Oysters
- Lean meats
- Pumpkin seeds
- Chickpeas
- Cashews

## Foods to Include Daily

### Colorful Vegetables
Aim for a rainbow of colors to ensure a variety of antioxidants:
- **Red**: Tomatoes, red bell peppers (lycopene)
- **Orange**: Carrots, sweet potatoes (beta-carotene)
- **Green**: Spinach, kale, broccoli (folate, iron)
- **Purple**: Eggplant, purple cabbage (anthocyanins)

### Lean Proteins
Essential for collagen production and tissue repair:
- Fish and seafood
- Poultry
- Legumes and beans
- Greek yogurt
- Eggs

### Healthy Fats
Support skin barrier function and nutrient absorption:
- Avocados
- Nuts and seeds
- Olive oil
- Fatty fish

### Hydrating Foods
Support skin moisture from within:
- Cucumber
- Watermelon
- Coconut water
- Herbal teas

## Foods to Limit or Avoid

### High-Glycemic Foods
Can trigger inflammation and breakouts:
- Refined sugars
- White bread and pasta
- Processed snacks
- Sugary drinks

### Excessive Dairy
May contribute to inflammation in some individuals:
- Consider limiting if you notice skin sensitivity
- Opt for low-fat options when consuming

### Processed Foods
Often high in sodium, preservatives, and unhealthy fats:
- Fast food
- Packaged snacks
- Processed meats

## Hydration: The Foundation of Healthy Skin

Water is essential for:
- Maintaining skin elasticity
- Flushing out toxins
- Supporting cellular functions
- Preventing dryness

**Daily Goals:**
- 8-10 glasses of water
- Herbal teas count toward hydration
- Foods with high water content contribute too

## Nutrition for Pre and Post-Procedure Support

### Before Cosmetic Procedures
- Increase Vitamin C intake for collagen support
- Ensure adequate protein for healing
- Stay well-hydrated
- Avoid alcohol and excessive sodium

### After Procedures
- Focus on anti-inflammatory foods
- Increase protein intake for tissue repair
- Include zinc-rich foods for wound healing
- Continue high Vitamin C intake

## Sample Daily Menu for Healthy Skin

**Breakfast:**
- Greek yogurt with berries and walnuts
- Green tea

**Lunch:**
- Salmon salad with mixed greens, avocado, and olive oil dressing
- Water with lemon

**Snack:**
- Handful of almonds and an orange

**Dinner:**
- Grilled chicken with roasted sweet potatoes and broccoli
- Herbal tea

## Supplements to Consider

While whole foods are the best source of nutrients, certain supplements may be beneficial:
- Omega-3 fish oil
- Vitamin D (especially in winter)
- Zinc (if not getting enough from food)
- Collagen peptides

**Important:** Always consult with your healthcare provider before starting new supplements.

## Lifestyle Factors That Support Nutrition

- **Regular meals**: Maintain steady nutrient supply
- **Mindful eating**: Pay attention to how foods affect your skin
- **Adequate sleep**: Supports skin repair and regeneration
- **Stress management**: Chronic stress can affect nutrient absorption
- **Regular exercise**: Improves circulation and nutrient delivery

Remember, changes in skin appearance from improved nutrition take time – typically 4-6 weeks to see noticeable improvements. Be patient and consistent with your healthy eating habits, and your skin will thank you with a natural, healthy glow that complements any aesthetic treatments you may choose to pursue.`,
    author: "Dr. Sarah Chen",
    authorRole: "Aesthetic Medicine Specialist",
    category: "Health & Wellness",
    tags: ["nutrition", "skincare", "healthy eating", "beauty"],
    publishDate: new Date("2024-01-15"),
    readTime: 6,
    image:
      "https://images.pexels.com/photos/4421545/pexels-photo-4421545.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop&crop=right",
    featured: true,
    views: 3200,
    likes: 298,
  },
];

export default function BlogPost() {
  const { id } = useParams();

  // Find the blog post by ID
  const post = blogPosts.find((p) => p.id === id);

  // If post doesn't exist, redirect to 404
  if (!post) {
    return <Navigate to="/404" replace />;
  }

  // Get related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  // Format content with proper paragraph spacing
  const formatContent = (content: string) => {
    return content.split("\n\n").map((paragraph, index) => {
      // Handle headers
      if (paragraph.startsWith("## ")) {
        return (
          <h2
            key={index}
            className="text-2xl font-bold text-medical-navy mt-8 mb-4"
          >
            {paragraph.replace("## ", "")}
          </h2>
        );
      }

      // Handle bold text
      if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
        return (
          <h3
            key={index}
            className="text-lg font-semibold text-medical-navy mt-6 mb-3"
          >
            {paragraph.replace(/\*\*/g, "")}
          </h3>
        );
      }

      // Handle bullet points
      if (paragraph.includes("- ")) {
        const items = paragraph
          .split("\n")
          .filter((line) => line.startsWith("- "));
        return (
          <ul
            key={index}
            className="list-disc list-inside space-y-2 mb-6 text-gray-700"
          >
            {items.map((item, itemIndex) => (
              <li key={itemIndex}>{item.replace("- ", "")}</li>
            ))}
          </ul>
        );
      }

      // Regular paragraphs
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-6">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <div className="pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" className="mb-6" asChild>
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Badge variant="secondary">{post.category}</Badge>
              {post.featured && (
                <Badge className="bg-medical-gold text-black">Featured</Badge>
              )}
            </div>

            <h1 className="text-4xl font-bold text-medical-navy leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600">{post.excerpt}</p>

            <div className="flex items-center justify-between py-4 border-y border-gray-200">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage
                    src={`https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop`}
                  />
                  <AvatarFallback>
                    {post.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-medical-navy">{post.author}</p>
                  <p className="text-sm text-gray-600">{post.authorRole}</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">
                    {post.publishDate.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">{post.readTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 sm:h-96 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="prose prose-lg max-w-none">
              {formatContent(post.content)}
            </article>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Social Actions */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm">
                    <Heart className="h-4 w-4 mr-2" />
                    {post.likes} Likes
                  </Button>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    {post.views} Views
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <BookmarkPlus className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Author Card */}
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage
                        src={`https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop`}
                      />
                      <AvatarFallback>
                        {post.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{post.author}</h3>
                      <p className="text-sm text-gray-600">{post.authorRole}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/team">View Profile</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Related Articles</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.id}`}
                        className="block group"
                      >
                        <h4 className="font-medium text-sm group-hover:text-medical-blue transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-xs text-gray-600 mt-1">
                          {relatedPost.readTime} min read
                        </p>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>

        {/* Navigation to Next/Previous Posts */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between">
            {blogPosts.findIndex((p) => p.id === post.id) > 0 && (
              <Button variant="outline" asChild>
                <Link
                  to={`/blog/${blogPosts[blogPosts.findIndex((p) => p.id === post.id) - 1].id}`}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Article
                </Link>
              </Button>
            )}

            {blogPosts.findIndex((p) => p.id === post.id) <
              blogPosts.length - 1 && (
              <Button variant="outline" className="ml-auto" asChild>
                <Link
                  to={`/blog/${blogPosts[blogPosts.findIndex((p) => p.id === post.id) + 1].id}`}
                >
                  Next Article
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
