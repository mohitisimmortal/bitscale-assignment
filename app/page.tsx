'use client';
import { useState } from "react";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import CustomTickIcon from "./customComponents/page";

// Main Component
export default function Home() {
  // State to manage active tab (Monthly/Annual)
  const [activeTab, setActiveTab] = useState("Monthly");

  return (
    <div className="container mx-auto p-10 font-[family-name:var(--font-geist-sans)]">
      {/* Tab Toggle for Monthly and Annual Pricing */}
      <div className="flex justify-center mb-8 bg-blue-100 w-fit mx-auto p-1 rounded-md text-black text-xl">
        {/* Monthly Button */}
        <button
          className={`px-5 py-3 font-medium rounded-md ${
            activeTab === "Monthly" ? "bg-white" : "bg-transparent"
          }`}
          onClick={() => setActiveTab("Monthly")}
        >
          Monthly
        </button>
        {/* Annual Button */}
        <button
          className={`px-5 py-3 font-medium rounded-md ${
            activeTab === "Annual" ? "bg-white" : "bg-transparent"
          }`}
          onClick={() => setActiveTab("Annual")}
        >
          Annual
        </button>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Trial Plan Pricing Card */}
        <div className="border p-6 rounded-lg flex flex-col h-full shadow-xl">
          {/* Card Header */}
          <div>
            <h2 className="text-xl font-medium">Trial</h2>
            <div className="text-5xl font-extrabold text-black mt-4">
              Try now
              <span className="block text-base text-neutral-500 font-normal">
                Get personalised template
              </span>
            </div>

            {/* Card Features List */}
            <div className="mt-8">
              <ul className="space-y-5 text-lg">
                <li className="flex items-center gap-3 text-neutral-500">
                  <CustomTickIcon bgColor="#374151" tickColor="white" />
                  25+ data sources
                </li>
                <li className="flex items-center gap-3 text-neutral-500">
                  <CustomTickIcon bgColor="#374151" tickColor="white" />
                  GPT4, LinkedIn and others
                </li>
                <li className="flex items-center gap-3 text-neutral-500">
                  <CustomTickIcon bgColor="#374151" tickColor="white" />
                  Access to slack community
                </li>
                <li className="flex items-center gap-3 text-neutral-500">
                  <CustomTickIcon bgColor="#374151" tickColor="white" />
                  10+ templates to scale your outbound
                </li>
              </ul>
            </div>
          </div>

          {/* Separator and Additional Information */}
          <div className="mt-auto">
            <hr className="border-t mt-8 mb-8 border-blue-400" />
            <ul className="space-y-5 list-disc pl-5 text-lg font-semibold text-neutral-500 mb-32">
              <li>Explore product capabilities</li>
            </ul>

            {/* Call-to-Action Button */}
            <button className="w-full py-2 bg-blue-700 text-white rounded-md">
              Try Now
            </button>
          </div>
        </div>

        {/* Growth Plan Pricing Card */}
        <div className="border p-6 rounded-lg flex flex-col h-full shadow-xl">
          <h2 className="text-xl font-medium">Growth</h2>
          <div className="mt-4 space-y-1">
            {/* Price and Duration */}
            <div className="flex items-baseline space-x-2">
              <span className="text-5xl font-extrabold text-black">
                {activeTab === "Monthly" ? "$229" : "$199"}
              </span>
              <span className="text-base text-neutral-500 font-medium">/month</span>
            </div>

            {/* Discount Badge and Original Price */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm">
                <CheckCircledIcon className="w-4 h-4 mr-1" />
                50% off
              </div>
              <span className="text-2xl font-bold text-neutral-500 line-through">
                {activeTab === "Monthly" ? "$459" : "$399"}
              </span>
            </div>
          </div>

          {/* Features List */}
          <div className="mt-8">
            <ul className="space-y-5 text-lg">
              <li className="flex items-center gap-3 text-[#1A56DB] font-bold">
                <CustomTickIcon bgColor="#1A56DB" tickColor="white" />
                8,000 Credits
              </li>
              <li className="flex items-center gap-3 text-neutral-500">
                <CustomTickIcon bgColor="#374151" tickColor="white" />
                Webhook, HTTP API
              </li>
              <li className="flex items-center gap-3 text-neutral-500">
                <CustomTickIcon bgColor="#374151" tickColor="white" />
                Credit rollover (up to 2x plan credits)
              </li>
              <li className="flex items-center gap-3 text-neutral-500">
                <CustomTickIcon bgColor="#374151" tickColor="white" />
                Outbound email integrations like Instantly, Smartlead
              </li>
              <li className="flex items-center gap-3 text-neutral-500">
                <CustomTickIcon bgColor="#374151" tickColor="white" />
                Dedicated 3 hours from Bitscale expert
              </li>
            </ul>
          </div>

          {/* Separator and Additional Information */}
          <div className="mt-auto">
            <hr className="border-t mt-8 mb-8 border-blue-400" />
            <ul className="space-y-5 list-disc pl-5 text-lg font-semibold text-neutral-500 mb-8">
              <li>Unlimited leads search</li>
              <li>Fully enriched 5000 leads</li>
              <li>Personalized outreach at scale</li>
            </ul>

            {/* Call-to-Action Button */}
            <button className="w-full py-2 bg-blue-700 text-white rounded-md">
              Continue with Growth
            </button>
          </div>
        </div>

        {/* Booster Plan Pricing Card */}
        <div className="bg-gradient-to-b from-[#1E429F] to-[#0B1839] text-white p-6 rounded-lg flex flex-col h-full shadow-xl shadow-blue-300">
          <h2 className="text-xl font-normal flex justify-between">
            Booster
            {/* Popular Tag */}
            <div className="flex items-center bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm">
              Popular
            </div>
          </h2>
          <div className="mt-4 space-y-1">
            {/* Price and Duration */}
            <div className="flex items-baseline space-x-2">
              <span className="text-5xl font-extrabold text-white">
                {activeTab === "Monthly" ? "$499" : "$299"}
              </span>
              <span className="text-base text-white">/month</span>
            </div>

            {/* Discount Badge and Original Price */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm">
                <CheckCircledIcon className="w-4 h-4 mr-1" />
                50% off
              </div>
              <span className="text-2xl font-bold text-white line-through">
                {activeTab === "Monthly" ? "$999" : "$599"}
              </span>
            </div>
          </div>

          {/* Features List */}
          <div className="mt-8 text-lg">
            <ul className="space-y-5 text-lg">
              <li className="flex items-center gap-3 font-semibold">
                <CustomTickIcon bgColor="white" tickColor="black" />
                25,000 Credits
              </li>
              <li className="flex items-center gap-3">
                <CustomTickIcon bgColor="white" tickColor="black" />
                Webhook, HTTP API
              </li>
              <li className="flex items-center gap-3">
                <CustomTickIcon bgColor="white" tickColor="black" />
                Credit rollover (up to 2x plan credits)
              </li>
              <li className="flex items-center gap-3">
                <CustomTickIcon bgColor="white" tickColor="black" />
                Outbound email integrations like Instantly, Smartlead
              </li>
              <li className="flex items-center gap-3">
                <CustomTickIcon bgColor="white" tickColor="black" />
                Dedicated 3 hours from Bitscale expert
              </li>
              <li className="flex items-center gap-3">
                <CustomTickIcon bgColor="white" tickColor="black" />
                Advanced models like Claude Sonnet
              </li>
              <li className="flex items-center gap-3">
                <CustomTickIcon bgColor="white" tickColor="black" />
                Dedicated 8 hours from Bitscale expert
              </li>
              <li className="flex items-center gap-3">
                <CustomTickIcon bgColor="white" tickColor="black" />
                2-way Hubspot integration
              </li>
            </ul>
          </div>

          {/* Separator and Additional Information */}
          <div className="mt-auto">
            <hr className="border-t mt-8 mb-8" />
            <ul className="space-y-5 list-disc pl-5 text-lg font-semibold text-white mb-8">
              <li>Unlimited leads search</li>
              <li>Fully enriched 15000 leads</li>
              <li>Personalized outreach at scale</li>
            </ul>

            {/* Call-to-Action Button */}
            <button className="w-full py-2 bg-white text-black rounded-md">
              Continue with Booster
            </button>
          </div>
        </div>

        {/* Enterprise Plan Pricing Card */}
        <div className="border p-6 rounded-lg flex flex-col h-full shadow-xl">
          <h2 className="text-xl font-medium">Enterprise</h2>
          <div className="text-5xl font-extrabold text-black mt-4">
            Contact Us
            <span className="block text-lg text-neutral-500 font-normal">
              For individual pricing
            </span>
          </div>

          {/* Features List */}
          <div className="mt-8">
            <ul className="space-y-5 text-lg">
              <li className="flex items-center gap-3 text-neutral-500">
                <CustomTickIcon bgColor="#374151" tickColor="white" />
                Data privacy certification
              </li>
              <li className="flex items-center gap-3 text-neutral-500">
                <CustomTickIcon bgColor="#374151" tickColor="white" />
                Priority Support
              </li>
              <li className="flex items-center gap-3 text-neutral-500">
                <CustomTickIcon bgColor="#374151" tickColor="white" />
                Dedicated Bitscale expert
              </li>
              <li className="flex items-center gap-3 text-neutral-500">
                <CustomTickIcon bgColor="#374151" tickColor="white" />
                Private Slack Channel
              </li>
              <li className="flex items-center gap-3 text-neutral-500">
                <CustomTickIcon bgColor="#374151" tickColor="white" />
                Collaborative workspace and templates
              </li>
            </ul>
          </div>

          {/* Separator and Additional Information */}
          <div className="mt-auto">
            <hr className="border-t mt-6 mb-7 border-blue-400" />
            <ul className="space-y-5 list-disc pl-5 text-lg text-neutral-500 font-semibold mb-8">
              <li>Perfect for High-Volume End-to-End CRM Data Enrichment</li>
              <li>Unlimited list of leads with unlimited data points</li>
            </ul>

            {/* Call-to-Action Button */}
            <button className="w-full py-2 bg-blue-700 text-white rounded-md">
              Try Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
