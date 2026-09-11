import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Brain, CheckCircle2, Clock, Download, Menu, X, BarChart3, FileText } from 'lucide-react';

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('notes');

  const grades = [
    { level: 'Grade 8', description: 'Foundation building & exam prep' },
    { level: 'Grade 9', description: 'Introduction to secondary subjects' },
    { level: 'Grade 10', description: 'National Examination focus' },
    { level: 'Grade 11', description: 'Advanced subject exploration' },
    { level: 'Grade 12', description: 'Final exam & tertiary entrance prep' },
  ];

  const subjects = [
    'English Language', 'Mathematics', 'Science', 'Social Studies',
    'Geography', 'History', 'Economics', 'Biology'
  ];

  const sampleNotes = [
    { title: 'Quadratic Equations', subject: 'Mathematics', grade: '10' },
    { title: 'The Cell Structure', subject: 'Biology', grade: '9' },
    { title: 'Essay Writing Techniques', subject: 'English', grade: '11' },
  ];

  const sampleQuizzes = [
    { title: 'Algebra Basics', questions: 15, time: '20 mins' },
    { title: 'Photosynthesis', questions: 12, time: '15 mins' },
    { title: 'World Capitals', questions: 20, time: '25 mins' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Study Buddy PNG
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition">Features</a>
              <a href="#resources" className="text-gray-700 hover:text-blue-600 font-medium transition">Resources</a>
              <a href="#app" className="text-gray-700 hover:text-blue-600 font-medium transition">App</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-blue-100 space-y-2">
              <a href="#features" className="block py-2 text-gray-700 hover:text-blue-600">Features</a>
              <a href="#resources" className="block py-2 text-gray-700 hover:text-blue-600">Resources</a>
              <a href="#app" className="block py-2 text-gray-700 hover:text-blue-600">App</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Academic Success Starts Here
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Study Buddy PNG is your comprehensive learning platform for Grades 8–12. Access structured notes, interactive quizzes, revision plans, and practice questions aligned with PNG national curriculum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                <Download className="w-4 h-4 mr-2" />
                Install App
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                Learn More
              </Button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 flex items-center justify-center min-h-96">
            <div className="text-center">
              <Brain className="w-24 h-24 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-700 font-semibold">Smart Learning Platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-12 sm:py-20 border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            What You Get
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: 'Comprehensive Notes', desc: 'Summarized content for all major subjects' },
              { icon: Brain, title: 'Interactive Quizzes', desc: 'Self-assessment tools to test understanding' },
              { icon: BarChart3, title: 'Revision Plans', desc: 'Structured study schedules & progress tracking' },
              { icon: CheckCircle2, title: 'Practice Questions', desc: 'Topic-based exercises & past exam papers' },
            ].map((feature, i) => (
              <Card key={i} className="p-6 border-blue-100 hover:shadow-lg transition-shadow">
                <feature.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Grade Levels */}
      <section id="resources" className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Tailored for Your Grade
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {grades.map((grade, i) => (
              <Card key={i} className="p-6 border-blue-100 bg-white hover:shadow-md transition-shadow text-center">
                <h3 className="font-bold text-blue-600 mb-2">{grade.level}</h3>
                <p className="text-sm text-gray-600">{grade.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section id="app" className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12 sm:py-20 border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Explore the App
          </h2>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-white border border-blue-100">
              <TabsTrigger value="notes" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <FileText className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Notes</span>
              </TabsTrigger>
              <TabsTrigger value="quizzes" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <Brain className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Quizzes</span>
              </TabsTrigger>
              <TabsTrigger value="revision" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <Clock className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Revision</span>
              </TabsTrigger>
              <TabsTrigger value="practice" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Practice</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="notes" className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                {sampleNotes.map((note, i) => (
                  <Card key={i} className="p-6 border-blue-100 bg-white hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="flex items-start justify-between mb-4">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">Grade {note.grade}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{note.title}</h3>
                    <p className="text-sm text-gray-600">{note.subject}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="quizzes" className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                {sampleQuizzes.map((quiz, i) => (
                  <Card key={i} className="p-6 border-blue-100 bg-white hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="flex items-start justify-between mb-4">
                      <Brain className="w-5 h-5 text-indigo-600" />
                      <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">{quiz.questions} Q</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{quiz.title}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      {quiz.time}
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="revision" className="space-y-4">
              <Card className="p-8 border-blue-100 bg-white">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Create Your Revision Plan</h3>
                  <p className="text-gray-600 mb-6">
                    Build a personalized weekly study schedule. Track progress across subjects and set goals for upcoming assessments.
                  </p>
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                    Start Planning
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="practice" className="space-y-4">
              <Card className="p-8 border-blue-100 bg-white">
                <div className="text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Practice Questions & Past Papers</h3>
                  <p className="text-gray-600 mb-6">
                    Access topic-based practice questions and past national examination papers to prepare effectively.
                  </p>
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                    Browse Questions
                  </Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-12 sm:py-20 bg-white border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Available Subjects
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {subjects.map((subject, i) => (
              <Card key={i} className="p-4 border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 text-center hover:shadow-md transition-shadow cursor-pointer">
                <p className="font-semibold text-gray-900 text-sm">{subject}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Excel in Your Studies?
          </h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Install Study Buddy PNG today and access all learning materials offline. Available for iOS and Android.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 font-semibold">
              <Download className="w-4 h-4 mr-2" />
              Download for iOS
            </Button>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 font-semibold">
              <Download className="w-4 h-4 mr-2" />
              Download for Android
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-white">Study Buddy PNG</span>
              </div>
              <p className="text-sm">Supporting academic excellence for Grades 8–12.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Notes</a></li>
                <li><a href="#" className="hover:text-white transition">Quizzes</a></li>
                <li><a href="#" className="hover:text-white transition">Practice</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Study Buddy PNG. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
