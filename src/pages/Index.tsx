
import React from 'react';
import Logo from '@/components/Logo';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <div className="min-h-screen bg-hacker-dark text-hacker-light flex flex-col">
      <header className="p-6 md:p-12">
        <Logo className="mx-auto md:mx-0" />
      </header>
      
      <main className="flex-1 px-6 md:px-12 max-w-screen-xl mx-auto w-full">
        <div className="py-12 md:py-24">
          <div className="space-y-6 md:space-y-10 max-w-4xl">
            <h1 className="font-mono tracking-tight leading-none text-4xl md:text-6xl lg:text-7xl">
              <div className="text-2xl md:text-3xl mb-2">Waterloo</div>
              <div className="text-5xl md:text-7xl font-crazy">Hacker Fab</div>
            </h1>
            
            <Separator className="bg-hacker-border w-24" />
            
            <p className="text-xl md:text-2xl leading-relaxed font-mono">
              A low-cost, open source semiconductor fab at the University of Waterloo. Part of <a className="underline" href="https://www.hackerfab.org" target="_blank">Hacker Fab</a>
            </p>
          </div>
        </div>

        <div className="py-12 md:py-24">
          <div className="space-y-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold font-mono">Fab Capabilities</h2>
            
            <Separator className="bg-hacker-border w-24" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-hacker-border p-6">
                <h3 className="text-xl font-bold mb-2 font-mono">UV Lithography</h3>
                <p className="text-muted-foreground">Using a TI DLP projector to create precise patterns for semiconductor fabrication. Minimum feature size achieved: 6 micron</p>
              </div>
              
              <div className="border border-hacker-border p-6">
                <h3 className="text-xl font-bold mb-2 font-mono">Spin Coater</h3>
                <p className="text-muted-foreground">With vacuum chuck for uniform application of photoresist and other materials.</p>
              </div>
              
              <div className="border border-hacker-border p-6">
                <h3 className="text-xl font-bold mb-2 font-mono">Tube Furnace</h3>
                <p className="text-muted-foreground">High-temperature (1200°C) furnace for thermal oxidation and annealing processes.</p>
              </div>
              
              <div className="border border-hacker-border p-6">
                <h3 className="text-xl font-bold mb-2 font-mono">Magnetron Sputter</h3>
                <p className="text-muted-foreground">For thin film deposition. Version 2 currently in development.</p>
              </div>
              
              <div className="border border-hacker-border p-6 md:col-span-2">
                <h3 className="text-xl font-bold mb-2 font-mono">RIE Etcher</h3>
                <p className="text-muted-foreground">Reactive Ion Etcher with RF power supply for plasma etching. Currently in progress.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 md:py-24">
          <div className="space-y-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold font-mono">Photos</h2>
            
            <Separator className="bg-hacker-border w-24" />
            
            <div className="grid grid-cols-3 md:grid-cols-2 gap-8">
              <img src="/litho.png" />
              <img src="/pattern.png" />
              <img src="/sputter.png" />
              <img src="/tube-furnace.png" />
            </div>
          </div>
        </div>
      </main>
      
      <footer className="p-6 md:p-12 border-t border-hacker-border">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="font-mono text-muted-foreground">contact@hackerfab.org</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Location</h3>
            <p className="font-mono text-muted-foreground">University of Waterloo<br />200 University Ave W<br />Waterloo, ON, Canada</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links</h3>
            <ul className="space-y-2 font-mono">
              <li><a target="_blank" href="https://github.com/hacker-fab/" className="text-muted-foreground hover:text-hacker-light transition-colors">GitHub</a></li>
              <li><a target="_blank" href="https://docs.hackerfab.org" className="text-muted-foreground hover:text-hacker-light transition-colors">Documentation</a></li>
              <li><a target="_blank" href="https://discord.gg/XZvEpHDW" className="text-muted-foreground hover:text-hacker-light transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Hacker Fab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
