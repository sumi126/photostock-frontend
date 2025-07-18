import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"
import type { Plan,Subscription,DownloadHistory,UploadHistory,PaymentHistory, Category } from "./interface.interface"

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  private plansSubject = new BehaviorSubject<Plan[]>([
    {
      id: "1",
      name: "Basic",
      price: 9.99,
      interval: "monthly",
      features: ["5 projects", "Basic support", "1GB storage"],
      category: "starter",
      status: "active",
      createdDate: "2024-01-15",
    },
    {
      id: "2",
      name: "Pro",
      price: 29.99,
      interval: "monthly",
      features: ["Unlimited projects", "Priority support", "10GB storage", "Advanced analytics"],
      category: "professional",
      status: "active",
      createdDate: "2024-01-10",
    },
    {
      id: "3",
      name: "Enterprise",
      price: 99.99,
      interval: "monthly",
      features: ["Everything in Pro", "Custom integrations", "Dedicated support", "100GB storage"],
      category: "enterprise",
      status: "active",
      createdDate: "2024-01-05",
    },
  ])

  private categoriesSubject = new BehaviorSubject<Category[]>([
    {
      id: "1",
      name: "Starter",
      description: "Perfect for individuals getting started",
      image: "/placeholder.svg?height=80&width=80",
      planCount: 1,
      createdDate: "2024-01-01",
    },
    {
      id: "2",
      name: "Professional",
      description: "For growing businesses and teams",
      image: "/placeholder.svg?height=80&width=80",
      planCount: 1,
      createdDate: "2024-01-01",
    },
    {
      id: "3",
      name: "Enterprise",
      description: "For large organizations with advanced needs",
      image: "/placeholder.svg?height=80&width=80",
      planCount: 1,
      createdDate: "2024-01-01",
    },
  ])

  private paymentHistorySubject = new BehaviorSubject<PaymentHistory[]>([
    {
      id: "1",
      date: "2024-01-15",
      amount: 29.99,
      status: "completed",
      method: "Visa ****4242",
      description: "Pro Plan - Monthly Subscription",
      invoiceUrl: "#",
    },
    {
      id: "2",
      date: "2023-12-15",
      amount: 29.99,
      status: "completed",
      method: "Visa ****4242",
      description: "Pro Plan - Monthly Subscription",
      invoiceUrl: "#",
    },
    {
      id: "3",
      date: "2023-11-15",
      amount: 29.99,
      status: "completed",
      method: "Visa ****4242",
      description: "Pro Plan - Monthly Subscription",
      invoiceUrl: "#",
    },
  ])

  private uploadHistorySubject = new BehaviorSubject<UploadHistory[]>([
    {
      id: "1",
      fileName: "project-assets.zip",
      fileSize: 15728640, // 15MB
      uploadDate: "2024-01-20",
      status: "completed",
      fileType: "ZIP",
      category: "Projects",
    },
    {
      id: "2",
      fileName: "user-manual.pdf",
      fileSize: 2097152, // 2MB
      uploadDate: "2024-01-18",
      status: "completed",
      fileType: "PDF",
      category: "Documentation",
    },
    {
      id: "3",
      fileName: "backup-data.sql",
      fileSize: 5242880, // 5MB
      uploadDate: "2024-01-15",
      status: "processing",
      fileType: "SQL",
      category: "Database",
    },
  ])

  private downloadHistorySubject = new BehaviorSubject<DownloadHistory[]>([
    {
      id: "1",
      fileName: "monthly-report.pdf",
      downloadDate: "2024-01-22",
      fileSize: 1048576, // 1MB
      downloadCount: 3,
      fileType: "PDF",
      category: "Reports",
    },
    {
      id: "2",
      fileName: "template-pack.zip",
      downloadDate: "2024-01-20",
      fileSize: 10485760, // 10MB
      downloadCount: 1,
      fileType: "ZIP",
      category: "Templates",
    },
    {
      id: "3",
      fileName: "user-guide.docx",
      downloadDate: "2024-01-18",
      fileSize: 524288, // 512KB
      downloadCount: 5,
      fileType: "DOCX",
      category: "Documentation",
    },
  ])

  public plans$ = this.plansSubject.asObservable()
  public categories$ = this.categoriesSubject.asObservable()
  public paymentHistory$ = this.paymentHistorySubject.asObservable()
  public uploadHistory$ = this.uploadHistorySubject.asObservable()
  public downloadHistory$ = this.downloadHistorySubject.asObservable()

  addPlan(plan: Plan): void {
    const currentPlans = this.plansSubject.value
    this.plansSubject.next([...currentPlans, plan])
  }

  addCategory(category: Category): void {
    const currentCategories = this.categoriesSubject.value
    this.categoriesSubject.next([...currentCategories, category])
  }

  getPlans(): Plan[] {
    return this.plansSubject.value
  }

  getCategories(): Category[] {
    return this.categoriesSubject.value
  }

  getPaymentHistory(): PaymentHistory[] {
    return this.paymentHistorySubject.value
  }

  getUploadHistory(): UploadHistory[] {
    return this.uploadHistorySubject.value
  }

  getDownloadHistory(): DownloadHistory[] {
    return this.downloadHistorySubject.value
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }
}
