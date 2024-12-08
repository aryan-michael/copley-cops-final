"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import blogPosts from "@/lib/BlogPostData";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <motion.div
      className="min-h-screen dark:bg-[#020817]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <header className=" ">
        <motion.div
          className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Our Blog</h1>
        </motion.div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="flex flex-col overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardHeader className="h-32 w-full">
                  <CardTitle className="text-lg font-semibold overflow-hidden text-ellipsis line-clamp-3 sm:text-xl">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardFooter className="mt-auto">
                  <Button variant="outline" onClick={() => setSelectedPost(post)}>
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Dialog */}
        {selectedPost && (
          <Dialog open={true} onOpenChange={() => setSelectedPost(null)}>
            <DialogContent className="max-w-2xl sm:max-w-lg md:max-w-4xl max-h-screen overflow-y-auto p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center sm:text-left">
                    {selectedPost.title}
                  </DialogTitle>
                </DialogHeader>
                <Image
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  width={800}
                  height={400}
                  className="w-full h-48 sm:h-64 object-cover rounded-lg mt-2 mb-4"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Author:</strong> {selectedPost.author}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Date:</strong> {selectedPost.date}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <strong>Read Time:</strong> {selectedPost.readTime}
                </p>
                <p className="text-gray-800 dark:text-gray-300 mb-4">{selectedPost.excerpt}</p>
                <div className="flex gap-2 flex-wrap">
                  {selectedPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md text-xs hover:cursor-pointer dark:bg-gray-700 dark:text-gray-300 transition-all duration-200 ease-in-out hover:bg-gray-300 hover:text-gray-800 dark:hover:bg-gray-600 dark:hover:text-gray-100"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Button
                  // variant=""
                  size="lg"
                  className="mt-6 w-full sm:w-auto"
                  onClick={() => setSelectedPost(null)}
                >
                  Close
                </Button>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </main>
    </motion.div>
  );
}