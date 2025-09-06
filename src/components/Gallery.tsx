import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Image as ImageIcon, Users, Award } from "lucide-react";
import trainingSession1 from "@/assets/training-session-1.jpg";
import groupTraining from "@/assets/group-training.jpg";
import coachingSession from "@/assets/coaching-session.jpg";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');

  const photos = [
    {
      id: 1,
      src: trainingSession1,
      title: "One-on-One Training Session",
      description: "Intensive coaching focusing on technique refinement"
    },
    {
      id: 2,
      src: groupTraining,
      title: "Group Training Session",
      description: "Students practicing footwork drills together"
    },
    {
      id: 3,
      src: coachingSession,
      title: "Advanced Coaching",
      description: "Professional coaching session in action"
    },
    {
      id: 4,
      src: trainingSession1,
      title: "Skills Development",
      description: "Building fundamental badminton techniques"
    },
    {
      id: 5,
      src: groupTraining,
      title: "Team Practice",
      description: "Group dynamics and team building exercises"
    },
    {
      id: 6,
      src: coachingSession,
      title: "Competition Prep",
      description: "Preparing students for tournaments"
    }
  ];

  const videos = [
    {
      id: 1,
      thumbnail: trainingSession1,
      title: "Smash Technique Masterclass",
      duration: "12:34",
      views: "2.5K"
    },
    {
      id: 2,
      thumbnail: groupTraining,
      title: "Footwork Fundamentals",
      duration: "8:42",
      views: "1.8K"
    },
    {
      id: 3,
      thumbnail: coachingSession,
      title: "Defensive Strategies",
      duration: "15:20",
      views: "3.2K"
    },
    {
      id: 4,
      thumbnail: trainingSession1,
      title: "Service Techniques",
      duration: "10:15",
      views: "2.1K"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Training
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See our students in action and watch their journey to badminton excellence
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted/50 p-1 rounded-lg inline-flex">
            <Button
              variant={activeTab === 'photos' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('photos')}
              className="rounded-md px-6 py-2 transition-all duration-200"
            >
              <ImageIcon className="w-4 h-4 mr-2" />
              Training Photos
            </Button>
            <Button
              variant={activeTab === 'videos' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('videos')}
              className="rounded-md px-6 py-2 transition-all duration-200"
            >
              <Play className="w-4 h-4 mr-2" />
              Training Videos
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">50+</div>
            <div className="text-muted-foreground">Active Students</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">25+</div>
            <div className="text-muted-foreground">Tournament Wins</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <ImageIcon className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">500+</div>
            <div className="text-muted-foreground">Training Hours</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">100+</div>
            <div className="text-muted-foreground">Training Videos</div>
          </div>
        </div>

        {/* Gallery Content */}
        {activeTab === 'photos' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <Card key={photo.id} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-0 relative">
                  <div className="relative overflow-hidden">
                    <img 
                      src={photo.src} 
                      alt={photo.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-bold text-lg mb-1">{photo.title}</h3>
                      <p className="text-sm text-white/90">{photo.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video) => (
              <Card key={video.id} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-0 relative">
                  <div className="relative overflow-hidden">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">{video.views} views</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;