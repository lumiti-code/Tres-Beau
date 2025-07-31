import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  Clock,
  User,
  Search,
  BookmarkPlus,
  Share2,
  ArrowRight,
  Heart,
  Eye,
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
    content:
      "Recovery after plastic surgery is crucial for achieving the best possible results...",
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
    content:
      "Rhinoplasty, commonly known as a nose job, is one of the most popular plastic surgery procedures...",
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
    content:
      "Your skin reflects your overall health, and nutrition plays a vital role in maintaining healthy, glowing skin...",
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
  {
    id: "4",
    title:
      "Non-Surgical Options: Achieving Results Without Going Under the Knife",
    excerpt:
      "Explore the latest non-invasive treatments that can help you achieve your aesthetic goals with minimal downtime.",
    content:
      "Not everyone is ready for surgical procedures, and that's perfectly fine. Modern aesthetic medicine offers many non-surgical options...",
    author: "Dr. Michael Rodriguez",
    authorRole: "Non-Surgical Specialist",
    category: "Non-Surgical",
    tags: ["botox", "fillers", "non-invasive", "minimal downtime"],
    publishDate: new Date("2024-01-12"),
    readTime: 10,
    image:
      "https://images.pexels.com/photos/32898294/pexels-photo-32898294.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop&crop=left",
    featured: false,
    views: 1650,
    likes: 124,
  },
  {
    id: "5",
    title:
      "Mental Health and Cosmetic Surgery: A Holistic Approach to Wellbeing",
    excerpt:
      "Understanding the psychological aspects of cosmetic surgery and the importance of mental health in your aesthetic journey.",
    content:
      "At Tres Beau Medical Group, we believe that true beauty comes from both physical and mental wellbeing...",
    author: "Dr. Maria Santos",
    authorRole: "Lead Plastic Surgeon",
    category: "Mental Health",
    tags: ["mental health", "wellbeing", "psychology", "self-care"],
    publishDate: new Date("2024-01-10"),
    readTime: 7,
    image:
      "https://images.pexels.com/photos/4421545/pexels-photo-4421545.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop&crop=top",
    featured: false,
    views: 890,
    likes: 67,
  },
  {
    id: "6",
    title: "Seasonal Skincare: Adapting Your Routine for Kenya's Climate",
    excerpt:
      "Learn how to adjust your skincare routine to protect and nourish your skin throughout Kenya's different seasons.",
    content:
      "Kenya's unique climate presents specific challenges for skincare. Here's how to adapt your routine...",
    author: "Dr. Sarah Chen",
    authorRole: "Aesthetic Medicine Specialist",
    category: "Skincare",
    tags: ["skincare", "climate", "kenya", "seasonal care"],
    publishDate: new Date("2024-01-08"),
    readTime: 5,
    image:
      "https://images.pexels.com/photos/32898294/pexels-photo-32898294.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop&crop=center",
    featured: false,
    views: 1240,
    likes: 89,
  },
];

const categories = [
  "All Categories",
  "Recovery Tips",
  "Procedures",
  "Health & Wellness",
  "Non-Surgical",
  "Mental Health",
  "Skincare",
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  const handleSearch = () => {
    let filtered = blogPosts;

    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
      );
    }

    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    setFilteredPosts(filtered);
  };

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.slice(0, 5);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-medical-blue/5 via-white to-medical-mint/10 pt-16 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-medical-blue/10 text-medical-blue">
              Health & Beauty Blog
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-medical-navy mb-6">
              Expert Insights &
              <br />
              <span className="text-medical-blue">Health Tips</span>
            </h1>
            <p className="text-xl text-medical-gray mb-8 max-w-3xl mx-auto">
              Stay informed with the latest in aesthetic medicine, recovery
              tips, and wellness advice from our board-certified specialists.
            </p>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-medical-gray" />
                  <Input
                    placeholder="Search articles, tips, procedures..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  onClick={handleSearch}
                  className="bg-medical-blue hover:bg-medical-blue-dark"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-medical-navy mb-6">
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-medical-blue/10 text-medical-blue">
                          {post.category}
                        </Badge>
                        <Badge className="bg-yellow-100 text-yellow-800">
                          Featured
                        </Badge>
                      </div>
                      <CardTitle className="group-hover:text-medical-blue transition-colors">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-medical-gray mb-4">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime} min read</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-medical-gray">
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            <span>{post.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            <span>{post.likes}</span>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-medical-blue hover:bg-medical-blue/10"
                          asChild
                        >
                          <Link to={`/blog/${post.id}`}>
                            Read More
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* All Posts */}
            <section>
              <h2 className="text-2xl font-bold text-medical-navy mb-6">
                Latest Articles
              </h2>
              <div className="space-y-6">
                {filteredPosts
                  .filter((post) => !post.featured)
                  .map((post) => (
                    <Card
                      key={post.id}
                      className="overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="aspect-[16/9] md:aspect-square overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="md:col-span-2 p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge className="bg-medical-blue/10 text-medical-blue">
                              {post.category}
                            </Badge>
                            <div className="flex items-center gap-1 text-sm text-medical-gray">
                              <Calendar className="h-3 w-3" />
                              <span>
                                {post.publishDate.toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-medical-navy mb-3 hover:text-medical-blue transition-colors">
                            <Link to={`/blog/${post.id}`}>{post.title}</Link>
                          </h3>
                          <p className="text-medical-gray mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-medical-gray">
                              <div className="flex items-center gap-1">
                                <User className="h-4 w-4" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{post.readTime} min</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Eye className="h-4 w-4" />
                                <span>{post.views.toLocaleString()}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="icon">
                                <BookmarkPlus className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Share2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <CardTitle className="text-medical-navy">
                  Health Tips Newsletter
                </CardTitle>
                <CardDescription>
                  Get weekly tips and insights delivered to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Your email address" type="email" />
                <Button className="w-full bg-medical-blue hover:bg-medical-blue-dark">
                  Subscribe
                </Button>
                <p className="text-xs text-medical-gray">
                  No spam, unsubscribe anytime.
                </p>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-medical-navy">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.slice(1).map((category) => (
                    <Button
                      key={category}
                      variant="ghost"
                      className="w-full justify-start text-medical-gray hover:text-medical-blue hover:bg-medical-blue/10"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-medical-navy">
                  Recent Posts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPosts.slice(0, 4).map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-medical-navy hover:text-medical-blue transition-colors line-clamp-2">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h4>
                        <div className="flex items-center gap-1 text-xs text-medical-gray mt-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.publishDate.toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="text-medical-navy">
                  Popular Tags
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {Array.from(
                    new Set(blogPosts.flatMap((post) => post.tags)),
                  ).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="cursor-pointer hover:bg-medical-blue hover:text-white border-medical-blue/30 text-medical-blue"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />

      {/* Live Chat */}
      <LiveChat />
    </div>
  );
}
