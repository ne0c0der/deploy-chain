import { type User, type InsertUser, type ContactInquiry, type InsertContactInquiry, type PartnerInquiry, type InsertPartnerInquiry } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  createPartnerInquiry(inquiry: InsertPartnerInquiry): Promise<PartnerInquiry>;
  getContactInquiries(): Promise<ContactInquiry[]>;
  getPartnerInquiries(): Promise<PartnerInquiry[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactInquiries: Map<string, ContactInquiry>;
  private partnerInquiries: Map<string, PartnerInquiry>;

  constructor() {
    this.users = new Map();
    this.contactInquiries = new Map();
    this.partnerInquiries = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = randomUUID();
    const inquiry: ContactInquiry = { 
      ...insertInquiry, 
      id, 
      company: insertInquiry.company || null,
      createdAt: new Date() 
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }

  async createPartnerInquiry(insertInquiry: InsertPartnerInquiry): Promise<PartnerInquiry> {
    const id = randomUUID();
    const inquiry: PartnerInquiry = { 
      ...insertInquiry, 
      id, 
      createdAt: new Date() 
    };
    this.partnerInquiries.set(id, inquiry);
    return inquiry;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values());
  }

  async getPartnerInquiries(): Promise<PartnerInquiry[]> {
    return Array.from(this.partnerInquiries.values());
  }
}

export const storage = new MemStorage();
