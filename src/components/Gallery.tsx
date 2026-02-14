import { useRef } from "react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Image as ImageIcon, Users, Award } from "lucide-react";
import { motion, useInView } from "framer-motion";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');

  const photos = [
    { id: 1, src: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800", title: "Badminton Training", description: "Professional badminton coaching" },
    { id: 2, src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800", title: "Yoga Session", description: "Mindfulness and flexibility" },
    { id: 3, src: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800", title: "Karate Training", description: "Martial arts discipline" },
    { id: 4, src: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=800", title: "Skating Practice", description: "Balance and technique training" },
    { id: 5, src: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800", title: "Swimming Lessons", description: "Professional swimming coaching" },
    { id: 6, src: "https://images.unsplash.com/photo-1558743212-c4e2e2e2e2e2?w=800", title: "Table Tennis", description: "Precision and reflexes" }
  ];

  const videos = [
    { id: 1, thumbnail: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800", title: "Badminton Smash Masterclass", duration: "12:34", views: "2.5K" },
    { id: 2, thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800", title: "Morning Yoga Flow", duration: "25:00", views: "3.8K" },
    { id: 3, thumbnail: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800", title: "Karate Kata Tutorial", duration: "18:42", views: "4.2K" },
    { id: 4, thumbnail: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=800", title: "Skating Basics", duration: "10:15", views: "1.9K" },
    { id: 5, thumbnail: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800", title: "Swimming Stroke Tutorial", duration: "15:30", views: "2.8K" },
    { id: 6, thumbnail: "https://images.unsplash.com/photo-1558743212-c4e2e2e2e2e2?w=800", title: "Table Tennis Spin Techniques", duration: "20:45", views: "3.1K" }
  ];

  return (
    <section className="py-20 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
            Training <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See our students in action across all our training programs
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="bg-card p-1 rounded-lg inline-flex border border-border/50">
            <Button variant={activeTab === 'photos' ? 'default' : 'ghost'} onClick={() => setActiveTab('photos')} className="rounded-md px-6 py-2">
              <ImageIcon className="w-4 h-4 mr-2" /> Photos
            </Button>
            <Button variant={activeTab === 'videos' ? 'default' : 'ghost'} onClick={() => setActiveTab('videos')} className="rounded-md px-6 py-2">
              <Play className="w-4 h-4 mr-2" /> Videos
            </Button>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { icon: Users, num: "50+", label: "Active Students" },
            { icon: Award, num: "25+", label: "Tournament Wins" },
            { icon: ImageIcon, num: "500+", label: "Training Hours" },
            { icon: Play, num: "100+", label: "Training Videos" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.num}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {activeTab === 'photos' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden border-border/50 hover:border-primary/30 shadow-lg hover:shadow-[0_0_25px_hsl(100_95%_51%/0.15)] transition-all duration-300">
                  <CardContent className="p-0 relative">
                    <div className="relative overflow-hidden">
                      <img src={photo.src} alt={photo.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-bold text-lg mb-1">{photo.title}</h3>
                        <p className="text-sm text-muted-foreground">{photo.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden border-border/50 hover:border-primary/30 shadow-lg hover:shadow-[0_0_25px_hsl(100_95%_51%/0.15)] transition-all duration-300">
                  <CardContent className="p-0 relative">
                    <div className="relative overflow-hidden">
                      <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
                      <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center shadow-[0_0_20px_hsl(100_95%_51%/0.4)]">
                          <Play className="w-8 h-8 text-primary-foreground ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-background/80 text-foreground text-xs px-2 py-1 rounded">{video.duration}</div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{video.title}</h3>
                      <p className="text-sm text-muted-foreground">{video.views} views</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
