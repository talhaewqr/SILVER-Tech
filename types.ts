import React from 'react';

export interface Tool {
  id: string;
  name: string;
  description: string;
  version: string;
  downloadUrl: string;
  icon: string; // URL or icon name
  category: 'Network' | 'Forensics' | 'Exploit' | 'Utility';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}