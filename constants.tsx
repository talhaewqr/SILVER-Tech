import { Tool } from './types';
import { Terminal, Shield, Cpu, Wifi, Youtube, Github, Twitter, MessageCircle } from 'lucide-react';
import React from 'react';

// ==========================================
// CONFIGURATION ZONE - EDIT YOUR DATA HERE
// ==========================================

export const SITE_CONFIG = {
  siteName: "SILVER-Tech", // Example: "ALI HACKER"
  heroTitle: "CYBER SECURITY EXPERT", 
  profileImage: "https://i.imgur.com/KZwZdTg.jpeg", // PASTE YOUR IMAGE LINK HERE
  whatsappLink: "https://whatsapp.com/channel/0029Vaf5pIEHFxOsA3Sr4r3o", // PASTE YOUR WHATSAPP CHANNEL LINK HERE
};

export const TOOLS_DATA: Tool[] = [
  {
    id: '1',
    name: WHATSAPP NUMBER META VERIFY'', // Change Name
    description: 'This is a derive link I made for verify your WhatsApp number. It is very good and secure.', // Change Description
    version: '1.0.0',
    downloadUrl: 'https://drive.google.com/drive/folders/1SwifRlAFlUyI8NMh1Zz3cw5qoTEVGr-Z', // PASTE DOWNLOAD LINK HERE
    icon: 'wifi',
    category: 'Network'
  },
  {
    id: '2',
    name: 'PRIVATE NUMBER CALL', // Change Name
    description: 'IN THIS DERIVE, How to call from a private numbe?.', // Change Description
    version: '2.5',
    downloadUrl: 'https://drive.google.com/file/d/1kAEThTB3VF4ZgS1M1rgBnBzNFec42yQQ/view?usp=drivesdk', // PASTE DOWNLOAD LINK HERE
    icon: 'cpu',
    category: 'Exploit'
  },
  {
    id: '3',
    name: 'BAN WHATSAPP NUMBER', // Change Name
    description: 'BAN ANY WHATSAPP NUMBER IN JUST 10 MINUTES.', // Change Description
    version: '3.0',
    downloadUrl: 'https://docs.google.com/document/d/1RhVWuPA8eGuT1IJyEDbLuJNhFCBaatibfBH3F8hAM3o/edit?usp=drivesdk', // PASTE DOWNLOAD LINK HERE
    icon: 'shield',
    category: 'Forensics'
  },
  {
    id: '4',
    name: 'CREATE UNLIMITED GMAIL', // Change Name
    description: 'IN THIS VIDEO YOU CAN LEARN HOW TO CREATE UNLIMITED GMAIL.', // Change Description
    version: '1.2',
    downloadUrl: 'https://drive.google.com/drive/folders/1N921yQXDubEekC5_dN2mJsparfty3Ccp', // PASTE DOWNLOAD LINK HERE
    icon: 'terminal',
    category: 'Utility'
  }
];

export const SOCIAL_LINKS = [
  {
    platform: 'WhatsApp Channel',
    url: SITE_CONFIG.whatsappLink,
    username: 'Join Now',
    icon: <MessageCircle className="w-6 h-6" />
  },
  {
    platform: 'YouTube',
    url: 'https://youtube.com/', // EDIT THIS
    username: '@YourChannel',
    icon: <Youtube className="w-6 h-6" />
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/', // EDIT THIS
    username: 'your-github',
    icon: <Github className="w-6 h-6" />
  },
  // Add more if needed
];
