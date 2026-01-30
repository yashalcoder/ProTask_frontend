"use client";

import Link from "next/link";
import { CheckCircle, Zap, BarChart3, Shield } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background w-full">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground font-bold">
              ✓
            </div>
            <span className="text-xl font-bold text-foreground">TaskFlow</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="#benefits"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Benefits
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Pricing
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-border px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full bg-secondary/10 px-4 py-2">
            <p className="text-sm font-medium text-secondary">
              Join thousands of productive teams
            </p>
          </div>

          <h1 className="mb-6 text-4xl md:text-6xl font-bold text-balance text-foreground leading-tight">
            Your tasks, perfectly organized
          </h1>

          <p className="mb-10 text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            TaskFlow helps you manage your projects effortlessly. Stay focused,
            collaborate seamlessly, and achieve more together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="rounded-full bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Start Free Today
            </Link>
            <Link
              href="#features"
              className="rounded-full border border-border px-8 py-3 text-base font-medium text-foreground hover:bg-card transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="border-b border-border px-4 py-20 md:py-32"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-foreground">
              Powerful features for teams
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to manage tasks efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature Card 1 */}
            <div className="rounded-lg border border-border bg-card p-8 hover:border-primary transition-colors">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">
                Smart Organization
              </h3>
              <p className="text-muted-foreground">
                Organize tasks by projects, priorities, and due dates. Keep
                everything in one place.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="rounded-lg border border-border bg-card p-8 hover:border-primary transition-colors">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">
                Lightning Fast
              </h3>
              <p className="text-muted-foreground">
                Experience instant task creation and updates with our optimized
                platform.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="rounded-lg border border-border bg-card p-8 hover:border-primary transition-colors">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">
                Progress Tracking
              </h3>
              <p className="text-muted-foreground">
                Track completion rates, view analytics, and celebrate your
                accomplishments.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="rounded-lg border border-border bg-card p-8 hover:border-primary transition-colors">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">
                Secure & Private
              </h3>
              <p className="text-muted-foreground">
                Your data is encrypted and protected. We take security
                seriously.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="border-b border-border px-4 py-20 md:py-32 bg-secondary/5"
      >
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="mb-2 text-3xl font-bold text-primary">50k+</div>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-primary">1M+</div>
              <p className="text-muted-foreground">Tasks Completed</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-primary">99.9%</div>
              <p className="text-muted-foreground">Uptime Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="border-b border-border px-4 py-20 md:py-32 bg-background"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-foreground">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the plan that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="rounded-lg border border-border bg-card p-8 hover:border-primary transition-colors flex flex-col">
              <h3 className="mb-2 text-xl font-bold text-foreground">
                Starter
              </h3>
              <p className="mb-6 text-muted-foreground">
                Perfect for individuals
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>

              <ul className="mb-8 space-y-4 flex-1">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Up to 50 tasks</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Basic organization</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Email support</span>
                </li>
              </ul>

              <Link
                href="/signup"
                className="w-full rounded-full border border-border px-6 py-2 text-center text-sm font-medium text-foreground hover:bg-secondary/5 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Pro Plan - Featured */}
            <div className="rounded-lg border-2 border-primary bg-card p-8 hover:shadow-lg transition-shadow flex flex-col relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>

              <h3 className="mb-2 text-xl font-bold text-foreground mt-4">
                Professional
              </h3>
              <p className="mb-6 text-muted-foreground">For growing teams</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">$9</span>
                <span className="text-muted-foreground">/month</span>
              </div>

              <ul className="mb-8 space-y-4 flex-1">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Unlimited tasks</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Advanced features</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Team collaboration</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Priority support</span>
                </li>
              </ul>

              <Link
                href="/signup"
                className="w-full rounded-full bg-primary px-6 py-2 text-center text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Start Free Trial
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="rounded-lg border border-border bg-card p-8 hover:border-primary transition-colors flex flex-col">
              <h3 className="mb-2 text-xl font-bold text-foreground">
                Enterprise
              </h3>
              <p className="mb-6 text-muted-foreground">
                For large organizations
              </p>

              <div className="mb-6">
                <span className="text-2xl font-bold text-primary">Custom</span>
              </div>

              <ul className="mb-8 space-y-4 flex-1">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Everything in Pro</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Custom integrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Dedicated support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">SLA guarantee</span>
                </li>
              </ul>

              <Link
                href="/contact"
                className="w-full rounded-full border border-border px-6 py-2 text-center text-sm font-medium text-foreground hover:bg-secondary/5 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-foreground">
            Ready to get organized?
          </h2>
          <p className="mb-10 text-lg text-muted-foreground">
            Join thousands of teams using TaskFlow to manage their work better.
            Start free, no credit card required.
          </p>
          <Link
            href="/signup"
            className="inline-block rounded-full bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Create Your Free Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground font-bold">
                  ✓
                </div>
                <span className="font-bold text-foreground">TaskFlow</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Making task management simple and effective.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 TaskFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
