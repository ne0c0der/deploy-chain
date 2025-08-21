import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema, insertPartnerInquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      res.json({ success: true, inquiry });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, error: "Invalid form data", details: error.errors });
      } else {
        res.status(500).json({ success: false, error: "Failed to submit contact inquiry" });
      }
    }
  });

  // Partner inquiry submission
  app.post("/api/partners", async (req, res) => {
    try {
      const validatedData = insertPartnerInquirySchema.parse(req.body);
      const inquiry = await storage.createPartnerInquiry(validatedData);
      res.json({ success: true, inquiry });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, error: "Invalid form data", details: error.errors });
      } else {
        res.status(500).json({ success: false, error: "Failed to submit partner inquiry" });
      }
    }
  });

  // Get contact inquiries (for admin/internal use)
  app.get("/api/contact", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json({ success: true, inquiries });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to fetch contact inquiries" });
    }
  });

  // Get partner inquiries (for admin/internal use)
  app.get("/api/partners", async (req, res) => {
    try {
      const inquiries = await storage.getPartnerInquiries();
      res.json({ success: true, inquiries });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to fetch partner inquiries" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
