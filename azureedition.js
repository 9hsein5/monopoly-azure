function Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, rent3, rent4, rent5) {
	this.name = name;
	this.pricetext = pricetext;
	this.price = price;
	this.groupNumber = groupNumber;
	this.color = color;
	this.owner = 0;
	this.mortgage = false;
	this.house = 0;
	this.hotel = 0;
	this.rent = rent1;
	this.baserent = baserent;
	this.rent1 = rent1;
	this.rent2 = rent2;
	this.rent3 = rent3;
	this.rent4 = rent4;
	this.rent5 = rent5;
	
	this.groupNumber_boolean = function() {
		return this.groupNumber === 1 || this.groupNumber === 2;
	};
	
	if (!this.groupNumber_boolean()) {
		this.houseprice = this.price / 2;
	}
	
	this.group = []; // An array of the other elements in the group
}

function Card(text, action) {
	this.text = text;
	this.action = action;
}

function corrections() {
	// Placeholder for future corrections
}

function utiltext() {
	return "If one Azure service is deployed, usage cost is 4 times amount shown on dice.<div>If both Azure services are deployed, usage cost is 10 times amount shown on dice.</div>";
}

function transtext() {
	return "If one Azure networking service is deployed, usage cost is 25 Credits.<div>If two are deployed, usage cost is 50 Credits.</div><div>If three are deployed, usage cost is 100 Credits.</div><div>If four are deployed, usage cost is 200 Credits.</div>";
}

function luxurytax() {
	var p = player[turn];
	addAlert(p.name + " paid 100 Credits for Premium Support.");
	p.pay(100, 0);
	updateMoney();
}

function citytax() {
	var p = player[turn];
	var amount = 0;
	// 10% of total deployed services value or 200 Credits, whichever is less
	for (var i = 1; i < 40; i++) {
		if (square[i].owner === p.index) {
			amount += square[i].price;
		}
	}
	amount = Math.floor(amount / 10);
	if (amount > 200) {
		amount = 200;
	}
	addAlert(p.name + " paid " + amount + " Credits for Azure Licensing.");
	p.pay(amount, 0);
	updateMoney();
}

var square = [];

square[0] = new Square("GO", "COLLECT 200 CREDITS AS YOU PASS.", "#FFFFFF");
square[1] = new Square("Azure Blob Storage", "60 Credits", "#8B4513", 60, 3, 2, 10, 30, 90, 160, 250);
square[2] = new Square("Azure Quiz", "ANSWER AZURE QUESTION", "#FFFFFF");
square[3] = new Square("Azure Files", "60 Credits", "#8B4513", 60, 3, 4, 20, 60, 180, 320, 450);
square[4] = new Square("Azure Licensing", "PAY 10% OR 200 CREDITS", "#FFFFFF");
square[5] = new Square("ExpressRoute", "200 Credits", "#FFFFFF", 200, 1);
square[6] = new Square("Azure Virtual Machines", "100 Credits", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
// Non-purchasable special square (challenge scenario)
square[7] = new Square("Azure Challenge", "DEPLOY OR PAY", "#FFFFFF", 0, 0);
square[8] = new Square("Azure Functions", "100 Credits", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[9] = new Square("Azure App Service", "120 Credits", "#87CEEB", 120, 4, 8, 40, 100, 300, 450, 600);
square[10] = new Square("Just Checking Status", "", "#FFFFFF");
square[11] = new Square("Azure Kubernetes Service", "140 Credits", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[12] = new Square("Azure Cost Management", "150 Credits", "#FFFFFF", 150, 2);
square[13] = new Square("Azure Container Instances", "140 Credits", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[14] = new Square("Azure Container Apps", "160 Credits", "#FF0080", 160, 5, 12, 60, 180, 500, 700, 900);
square[15] = new Square("VPN Gateway", "200 Credits", "#FFFFFF", 200, 1);
square[16] = new Square("Azure SQL Database", "180 Credits", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
// Non-purchasable special square (quiz)
square[17] = new Square("Azure Quiz", "ANSWER AZURE QUESTION", "#FFFFFF", 0, 0);
square[18] = new Square("Cosmos DB", "180 Credits", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[19] = new Square("Azure Database for PostgreSQL", "200 Credits", "#FFA500", 200, 6, 16, 80, 220, 600, 800, 1000);
square[20] = new Square("Free Parking", "", "#FFFFFF");
square[21] = new Square("Azure Virtual Network", "220 Credits", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[22] = new Square("Azure Challenge", "DEPLOY OR PAY", "#FFFFFF", 0, 0);
square[23] = new Square("Azure Firewall", "220 Credits", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[24] = new Square("Azure DDoS Protection", "240 Credits", "#FF0000", 240, 7, 20, 100, 300, 750, 925, 1100);
square[25] = new Square("Load Balancer", "200 Credits", "#FFFFFF", 200, 1);
square[26] = new Square("Azure Monitor", "260 Credits", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[27] = new Square("Azure Log Analytics", "260 Credits", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[28] = new Square("Azure Advisor", "150 Credits", "#FFFFFF", 150, 2);
square[29] = new Square("Application Insights", "280 Credits", "#FFFF00", 280, 8, 24, 120, 360, 850, 1025, 1200);
square[30] = new Square("Tech Support Case", "Go directly to Tech Support. Do not pass GO. Do not collect 200 Credits.", "#FFFFFF");
square[31] = new Square("Azure Active Directory", "300 Credits", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[32] = new Square("Azure Policy", "300 Credits", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[33] = new Square("Azure Quiz", "ANSWER AZURE QUESTION", "#FFFFFF", 0, 0);
square[34] = new Square("Azure Key Vault", "320 Credits", "#008000", 320, 9, 28, 150, 450, 1000, 1200, 1400);
square[35] = new Square("Traffic Manager", "200 Credits", "#FFFFFF", 200, 1);
square[36] = new Square("Azure Challenge", "DEPLOY OR PAY", "#FFFFFF", 0, 0);
square[37] = new Square("Azure Synapse Analytics", "350 Credits", "#0000FF", 350, 10, 35, 175, 500, 1100, 1300, 1500);
square[38] = new Square("Premium Support", "Pay 100 Credits", "#FFFFFF");
square[39] = new Square("Azure Data Lake", "400 Credits", "#0000FF", 400, 10, 50, 200, 600, 1400, 1700, 2000);

// Azure Quiz Questions Pool - Architect & AI Engineer Focus
// Note: Keep questions concise; options array must have 4 items; answer is index 0-3.
var azureQuizzes = [
	{
		question: "Which architecture pattern is best for decoupling microservices in Azure?",
		options: ["Event-driven with Service Bus", "Direct HTTP calls", "Shared database", "Monolithic design"],
		answer: 0
	},
	{
		question: "What is the recommended approach for Retrieval Augmented Generation (RAG) in Azure?",
		options: ["Azure OpenAI + AI Search", "Only GPT-4", "Azure Functions only", "Azure SQL"],
		answer: 0
	},
	{
		question: "Which service provides semantic search for AI applications?",
		options: ["Azure Blob Storage", "Azure AI Search", "Azure SQL", "Cosmos DB"],
		answer: 1
	},
	{
		question: "What is the best practice for deploying Azure OpenAI at scale?",
		options: ["Single instance only", "PTU with load balancing", "Share API keys", "No rate limits"],
		answer: 1
	},
	{
		question: "Which pattern ensures high availability for mission-critical workloads?",
		options: ["Single region deployment", "Multi-region active-active", "No redundancy", "Manual failover only"],
		answer: 1
	},
	{
		question: "What is the hub-spoke network topology used for?",
		options: ["Cost savings only", "Centralized governance and connectivity", "Faster deployment", "Gaming workloads"],
		answer: 1
	},
	{
		question: "Which service orchestrates complex AI agent workflows?",
		options: ["Azure VMs", "Azure Foundry Agent Service", "Azure Storage", "Azure DNS"],
		answer: 1
	},
	{
		question: "What is the recommended approach for fine-tuning LLMs in Azure?",
		options: ["Azure OpenAI fine-tuning API", "Download and train locally", "No fine-tuning available", "Use Excel"],
		answer: 0
	},
	{
		question: "Which design pattern handles transient failures in distributed systems?",
		options: ["Ignore errors", "Retry pattern with exponential backoff", "Restart everything", "Delete resources"],
		answer: 1
	},
	{
		question: "What is Azure Landing Zone used for?",
		options: ["VM deployment only", "Enterprise-scale architecture foundation", "Storage only", "Testing only"],
		answer: 1
	},
	{
		question: "Which service provides responsible AI content filtering?",
		options: ["Azure Firewall", "Azure AI Content Safety", "Azure Policy", "Azure Monitor"],
		answer: 1
	},
	{
		question: "What is the Circuit Breaker pattern used for?",
		options: ["Electrical work", "Prevent cascading failures", "Increase costs", "Slow down requests"],
		answer: 1
	},
	{
		question: "Which architecture style suits event-driven AI processing?",
		options: ["Monolithic", "Event-driven with Event Grid/Service Bus", "Hardcoded workflows", "Manual processing"],
		answer: 1
	},
	{
		question: "What is Azure AI Foundry primarily used for?",
		options: ["Only storage", "Building and deploying AI applications", "Networking only", "DNS management"],
		answer: 1
	},
	{
		question: "Which service provides prompt flow orchestration for LLMs?",
		options: ["Azure Blob Storage", "Azure AI Foundry", "Azure DNS", "Azure VPN"],
		answer: 1
	},
	{
		question: "What is the best practice for managing AI model versions?",
		options: ["No versioning", "MLOps with model registry", "Manual tracking in Excel", "Delete old models"],
		answer: 1
	},
	{
		question: "Which pattern enables cost optimization for AI workloads?",
		options: ["Always use largest models", "Right-sizing with cost monitoring", "No monitoring", "Ignore costs"],
		answer: 1
	},
	{
		question: "What is the Bulkhead pattern used for?",
		options: ["Ship building", "Resource isolation to prevent failures", "Increase complexity", "Slow performance"],
		answer: 1
	},
	{
		question: "Which service enables vector embeddings for semantic search?",
		options: ["Azure DNS", "Azure OpenAI Embeddings API", "Azure VPN", "Azure Policy"],
		answer: 1
	},
	{
		question: "What is the recommended approach for AI observability?",
		options: ["No monitoring", "Application Insights + prompt tracing", "Manual logging only", "Ignore errors"],
		answer: 1
	},
	{
		question: "Which architecture supports multi-tenant AI applications?",
		options: ["Single shared resource", "Tenant isolation with RBAC", "No security", "One tenant only"],
		answer: 1
	},
	{
		question: "What is the Strangler Fig pattern used for?",
		options: ["Gardening", "Gradual system modernization", "Immediate replacement", "Ignore legacy systems"],
		answer: 1
	},
	{
		question: "Which service provides managed vector database capabilities?",
		options: ["Azure Blob Storage", "Azure AI Search with vector support", "Azure VPN", "Azure DNS"],
		answer: 1
	},
	{
		question: "What is the best practice for securing AI endpoints?",
		options: ["Public access for all", "APIM with OAuth2 and rate limiting", "No authentication", "Share keys publicly"],
		answer: 1
	},
	{
		question: "Which pattern enables graceful degradation in AI systems?",
		options: ["Complete failure", "Fallback pattern with cached responses", "No error handling", "Crash immediately"],
		answer: 1
	}
// Additional architect/AI quizzes (expanding to 100+)
,
	{ question: "Which service provides centralized secret management?", options: ["Azure Key Vault", "Azure Storage", "Azure DNS", "Azure Policy"], answer: 0 },
	{ question: "Best practice for multi-region read/write in Cosmos DB?", options: ["Multi-region writes", "Single region", "Manual sync", "CSV export"], answer: 0 },
	{ question: "Preferred ingress to protect web apps globally?", options: ["Azure Front Door", "VM NAT", "Static IP", "Manual firewall"], answer: 0 },
	{ question: "What enforces compliance at scale?", options: ["Azure Policy", "Key Vault", "Blob Storage", "Cloud Shell"], answer: 0 },
	{ question: "Recommended auth for APIs?", options: ["OAuth2 via APIM", "Basic auth", "No auth", "Shared key in code"], answer: 0 },
	{ question: "Event-driven integration choice?", options: ["Event Grid", "FTP", "Email", "DNS"], answer: 0 },
	{ question: "Service for durable workflows?", options: ["Durable Functions", "VM cron", "Excel macros", "DNS"], answer: 0 },
	{ question: "Vector search capability lives in?", options: ["Azure AI Search", "Azure SQL", "ExpressRoute", "Cloud Shell"], answer: 0 },
	{ question: "Pattern to isolate failures between components?", options: ["Bulkhead", "Monolith", "Tight coupling", "Global lock"], answer: 0 },
	{ question: "Recommended telemetry stack?", options: ["App Insights + Log Analytics", "Local logs only", "Email alerts", "None"], answer: 0 },
	{ question: "Preferred approach for secret injection?", options: ["Managed Identity + Key Vault", "Plain env vars", "Hardcoded in code", "Shared text file"], answer: 0 },
	{ question: "Which tool gives enterprise-scale baseline?", options: ["Azure Landing Zones", "Random scripts", "Ad-hoc tags", "Local policy"], answer: 0 },
	{ question: "Optimize compute costs for batch jobs?", options: ["Spot VMs", "Pay-as-you-go only", "Dedicated host", "No scaling"], answer: 0 },
	{ question: "Prevent request storms under partial outage?", options: ["Circuit Breaker", "Unlimited retries", "No timeouts", "Global lock"], answer: 0 },
	{ question: "Standardize API keys per app?", options: ["APIM + per-app secrets", "Shared global key", "Hardcoded in repo", "Clipboard"], answer: 0 },
	{ question: "Recommended model observability in AI?", options: ["Prompt/trace logging", "No logs", "Screenshots", "CSV only"], answer: 0 },
	{ question: "Fast ETL/ELT orchestration?", options: ["Data Factory", "Excel", "FTP", "DNS"], answer: 0 },
	{ question: "Low-latency pub/sub messaging?", options: ["Service Bus", "Email", "Webhook only", "SSH"], answer: 0 },
	{ question: "Secure PaaS networking privately?", options: ["Private Link", "Public IP", "NAT only", "Static routes"], answer: 0 },
	{ question: "Recommended cache for high throughput?", options: ["Azure Cache for Redis", "Local file cache", "SQL only", "Blob only"], answer: 0 },
	{ question: "Best cross-region DB failover?", options: ["Geo-replication", "ZIP backups", "Manual restore", "CSV copy"], answer: 0 },
	{ question: "Centralized dashboard for containers?", options: ["Managed Grafana", "Notebook", "Telnet", "RDP"], answer: 0 },
	{ question: "API governance across orgs?", options: ["API Center", "Excel tracker", "Email", "Wiki"], answer: 0 },
	{ question: "Secure dev workstation service?", options: ["Microsoft Dev Box", "RDP to prod", "Home PC", "Shared VM"], answer: 0 },
	{ question: "Global content delivery platform?", options: ["Azure CDN", "FTP", "SMTP", "NFS"], answer: 0 },
	{ question: "Which service manages keys and HSMs?", options: ["Key Vault / Managed HSM", "Azure DNS", "Azure Policy", "Blob Storage"], answer: 0 },
	{ question: "Enable private RDP/SSH to VMs?", options: ["Azure Bastion", "Public IP", "Open 22", "Third-party only"], answer: 0 },
	{ question: "Centralized metrics/logs for apps?", options: ["Azure Monitor", "Local syslog", "No logs", "CSV"], answer: 0 },
	{ question: "Managed PostgreSQL option?", options: ["Azure Database for PostgreSQL", "Self-hosted VM", "Access DB", "Excel"], answer: 0 },
	{ question: "Which enforces tagging at scale?", options: ["Azure Policy", "Email reminders", "Runbooks only", "Manual"], answer: 0 },
	{ question: "Best practice for API rate limiting?", options: ["APIM policies", "No limit", "App code only", "Firewall only"], answer: 0 },
	{ question: "Multi-tenant isolation mechanism?", options: ["RBAC + tenant scoping", "Shared creds", "Public access", "Flat ACL"], answer: 0 },
	{ question: "Preferred web sockets service?", options: ["Web PubSub", "DIY TCP", "SMTP", "SSH"], answer: 0 },
	{ question: "Recommended data lake analytics?", options: ["Synapse + Data Lake", "Excel", "FTP", "CSV"], answer: 0 },
	{ question: "Enterprise data governance?", options: ["Microsoft Purview", "Folder names", "Email", "Manual tracking"], answer: 0 },
	{ question: "Secure apps from DDoS?", options: ["Azure DDoS Protection", "Big VM", "Manual rules only", "VPN"], answer: 0 },
	{ question: "Hybrid management across estates?", options: ["Azure Arc", "Local MMC", "Telnet", "RDP only"], answer: 0 },
	{ question: "Global high availability DNS?", options: ["Azure Traffic Manager", "Hosts file", "Local router", "Spreadsheet"], answer: 0 },
	{ question: "Pattern to modernize legacy monoliths?", options: ["Strangler Fig", "Fork-lift", "Big bang", "Freeze"], answer: 0 },
	{ question: "Edge IoT operations control plane?", options: ["Azure IoT Operations", "Custom cron", "Email", "FTP"], answer: 0 },
	{ question: "Preferred auth for user-facing apps?", options: ["Microsoft Entra ID", "Local DB", "OAuth DIY only", "Anonymous"], answer: 0 },
	{ question: "Workflow for LLM orchestration?", options: ["Prompt flow in AI Foundry", "Manual scripts", "Batch only", "DNS"], answer: 0 },
	{ question: "Which service runs managed Kafka-like ingestion?", options: ["Event Hubs", "SMTP", "FTP", "Webhooks only"], answer: 0 },
	{ question: "Move resources across regions?", options: ["Azure Resource Mover", "ARM export/import", "ZIP files", "Manual"], answer: 0 },
	{ question: "Private service endpoints for PaaS?", options: ["Private Link", "Public IP", "DMZ", "NAT only"], answer: 0 },
	{ question: "Scale to thousands of VMs?", options: ["VM Scale Sets", "Manual create", "One huge VM", "Hyper-V"], answer: 0 },
	{ question: "Global API publishing platform?", options: ["API Management", "GitHub only", "Wiki", "Email"], answer: 0 },
	{ question: "Managed Prometheus/Grafana alternative?", options: ["Managed Grafana", "TXT logs", "Excel", "Paint"], answer: 0 },
	{ question: "Which storage for block blobs?", options: ["Azure Blob Storage", "File shares", "Disks", "Registry"], answer: 0 },
	{ question: "Best multi-region write consistency for Cosmos?", options: ["Choose appropriate consistency level", "Always strong", "Random", "None"], answer: 0 },
	{ question: "Policy to deny public storage?", options: ["Azure Policy rule", "Email", "Script", "Manual review"], answer: 0 },
	{ question: "Use cases for Front Door vs Traffic Manager?", options: ["HTTP routing vs DNS-based load-balancing", "Both same", "Neither", "Only for FTP"], answer: 0 },
	{ question: "AKS best practice for secrets?", options: ["Workload Identity + Key Vault", "Plain env", "ConfigMap", "In code"], answer: 0 },
	{ question: "Standardize environments for teams?", options: ["Deployment Environments", "Spreadsheets", "Manual VMs", "Local scripts"], answer: 0 },
	{ question: "Test resiliency of apps?", options: ["Chaos Studio", "Random reboot", "No tests", "Manual"], answer: 0 },
	{ question: "Global low-latency app hosting?", options: ["App Service + Front Door", "Single VM", "Shared hosting", "On-prem"], answer: 0 },
	{ question: "Secure service-to-service auth?", options: ["Managed Identity", "Shared password", "SSH keys in code", "Anonymous"], answer: 0 },
	{ question: "Recommended logging for serverless?", options: ["App Insights + Diagnostics", "Console only", "None", "CSV"], answer: 0 },
	{ question: "Best storage for VM disks?", options: ["Managed Disks", "Blob only", "Local", "USB"], answer: 0 },
	{ question: "API-centric eventing choice?", options: ["Event Grid", "Service Bus only", "Email", "Cron"], answer: 0 },
	{ question: "IoT device telemetry ingestion?", options: ["IoT Hub", "SMTP", "Manual", "FTP"], answer: 0 },
	{ question: "Enterprise AI platform for copilots?", options: ["Azure AI Foundry", "Notepad", "Excel", "Wiki"], answer: 0 },
	{ question: "End-to-end data platform service?", options: ["Microsoft Fabric", "Access", "CSV", "FTP"], answer: 0 },
	{ question: "Distributed tracing recommended?", options: ["OpenTelemetry + App Insights", "None", "Email", "Syslog only"], answer: 0 },
	{ question: "Best practice for VNet segmentation?", options: ["Spokes per workload", "One flat VNet", "Random subnets", "No NSGs"], answer: 0 },
	{ question: "Hybrid connectivity to Azure?", options: ["ExpressRoute or VPN", "SMTP", "FTP", "Dial-up"], answer: 0 },
	{ question: "Protect PaaS from public exposure?", options: ["Private Endpoints", "Public", "NAT", "Open ports"], answer: 0 },
	{ question: "High-scale container orchestration?", options: ["AKS", "Single VM", "Batch", "WSL"], answer: 0 },
	{ question: "Serverless integration patterns?", options: ["Functions + Durable + Event Grid", "VM timers", "Batch", "SSH"], answer: 0 },
	{ question: "RBAC scope best practice?", options: ["Least privilege", "Owner everywhere", "Contributor for all", "Reader only"], answer: 0 },
	{ question: "Key Vault integration with APIM?", options: ["Store secrets in KV, reference in APIM", "Hardcode", "Plain text", "Git"], answer: 0 },
	{ question: "Multi-stage CI/CD for infra?", options: ["Pipelines with IaC (Bicep/Terraform)", "Manual", "Click ops", "Doc only"], answer: 0 },
	{ question: "Data lake access pattern?", options: ["Medallion (Bronze/Silver/Gold)", "Flat folder", "Random", "Email"], answer: 0 },
	{ question: "Best service for streaming analytics?", options: ["Stream Analytics", "Excel", "FTP", "SMTP"], answer: 0 },
	{ question: "Which service provides APM for apps?", options: ["Application Insights", "DNS", "Key Vault", "Blob"], answer: 0 },
	{ question: "Govern multi-tenant MSP ops?", options: ["Azure Lighthouse", "Shared Owner", "Local Admin", "None"], answer: 0 },
	{ question: "Recommended edge file system for HPC?", options: ["Managed Lustre", "NTFS", "FAT32", "Ext2"], answer: 0 },
	{ question: "Container image storage?", options: ["ACR (Container Registry)", "Blob public", "Git LFS", "FTP"], answer: 0 },
	{ question: "Testing web apps end-to-end?", options: ["Playwright Testing", "Manual", "Screenshots", "Ping"], answer: 0 },
	{ question: "Central config for apps?", options: ["App Configuration", ".env in repo", "Clipboard", "Hosts"], answer: 0 },
	{ question: "Enterprise search with semantic + vector?", options: ["Azure AI Search", "SQL LIKE", "Regex", "Full scan"], answer: 0 },
	{ question: "Which service to orchestrate data pipelines?", options: ["Data Factory", "Cron", "Email", "Manual"], answer: 0 },
	{ question: "Identity for VMs and apps?", options: ["Managed Identity", "Service user with password", "Local admin", "Shared key"], answer: 0 },
	{ question: "Recommended zero trust approach?", options: ["Conditional Access + Segmentation", "Open ports", "Shared creds", "Flat network"], answer: 0 },
	{ question: "Low-latency real-time messaging?", options: ["SignalR or Web PubSub", "Email", "FTP", "SSH"], answer: 0 },
	{ question: "Scale-out analytics engine?", options: ["Databricks", "Access", "Excel", "Single VM"], answer: 0 },
	{ question: "API discovery and reuse?", options: ["API Center", "Wiki", "Email", "Clipboard"], answer: 0 },
	{ question: "Automate infra tasks?", options: ["Automation / Runbooks", "Manual", "RDP", "SSH only"], answer: 0 },
	{ question: "Plan, build, ship software", options: ["Azure DevOps", "Email", "Excel", "Notepad"], answer: 0 },
	{ question: "Global site-to-site networking?", options: ["Virtual WAN", "Home router", "DDNS", "Telnet"], answer: 0 },
	{ question: "Enterprise-scale Azure baseline?", options: ["Landing Zone (ESLZ)", "Random", "Ad-hoc", "None"], answer: 0 }
];

// Non-repeating quiz selection pool and accessor
// Clone the quizzes into a mutable pool that we draw from randomly.
var azureQuizPool = azureQuizzes.slice();

function getNextAzureQuiz() {
	// Returns a quiz object and removes it from the pool so it won't repeat.
	// If pool is empty, return null to indicate exhaustion.
	if (!Array.isArray(azureQuizPool) || azureQuizPool.length === 0) {
		return null;
	}
	var idx = Math.floor(Math.random() * azureQuizPool.length);
	return azureQuizPool.splice(idx, 1)[0];
}

var communityChestCards = [];
var chanceCards = [];

// Azure Quiz Cards (Community Chest)
// Community Chest: Architecture scenarios (describe or decide). Actions model impact.
communityChestCards[0] = new Card("Get out of Tech Support Free — You mitigated a P1 by failing over to secondary region. Keep until needed or trade.", function(p) { p.communityChestJailCard = true; updateOwned();});
communityChestCards[1] = new Card("Architecture review: You implemented hub-spoke with Azure Firewall. Collect 100 Credits.", function() { addamount(100, "Hub-Spoke Implemented");});
communityChestCards[2] = new Card("Cost optimization: Rightsized AKS node pools and enabled autoscaling. Collect 150 Credits.", function() { addamount(150, "AKS Optimization");});
communityChestCards[3] = new Card("Migration wave completed: Database cutover to Azure SQL succeeded. Collect 200 Credits.", function() { addamount(200, "DB Cutover Success");});
communityChestCards[4] = new Card("Security design: Rolled out Key Vault + Managed Identities. Collect 75 Credits.", function() { addamount(75, "Identity Hardening");});
communityChestCards[5] = new Card("Landing zone governance: Policies and RBAC standardized. Collect 50 Credits.", function() { addamount(50, "Governance Baseline");});
communityChestCards[6] = new Card("AI architecture: Deployed RAG (AI Search + OpenAI). Collect 100 Credits.", function() { addamount(100, "RAG Deployed");});
communityChestCards[7] = new Card("Observability uplift: App Insights + Log Analytics dashboards live. Collect 50 Credits.", function() { addamount(50, "Observability Uplift");});
communityChestCards[8] = new Card("Incident: Misconfigured NSG blocked traffic. Pay 100 Credits to remediate.", function() { subtractamount(100, "NSG Fix");});
communityChestCards[9] = new Card("Security incident: Rotate secrets and revoke credentials. Pay 150 Credits.", function() { subtractamount(150, "Secret Rotation");});
communityChestCards[10] = new Card("Cost drift: Decommission idle test subscriptions. Pay 125 Credits cleanup fees.", function() { subtractamount(125, "Idle Cleanup");});
communityChestCards[11] = new Card("Reliability gap: SLA breach due to single-region deployment. Pay 75 Credits.", function() { subtractamount(75, "SLA Breach");});
communityChestCards[12] = new Card("Architecture brown bag: Share reference design. Each player pays you 50 Credits.", function() { collectfromeachplayer(50, "Design Share");});

// Azure Challenge Cards (Chance)
// Chance: Architecture scenarios with movement/fees modeling outcomes
chanceCards[0] = new Card("Get out of Tech Support Free — Architecture runbook resolved outage. Keep until needed or trade.", function(p) { p.chanceJailCard = true; updateOwned();});
chanceCards[1] = new Card("AKS rollout: Move directly to Azure Kubernetes Service.", function() { advance(11);});
chanceCards[2] = new Card("Quota exceeded: Scale plan adjustment and justification. Pay 100 Credits.", function() { subtractamount(100, "Quota Adjustment");});
chanceCards[3] = new Card("FinOps win: RI/Savings Plans applied. Collect 200 Credits.", function() { addamount(200, "FinOps Savings");});
chanceCards[4] = new Card("DDoS hardened edge: Move forward 3 spaces.", function() {
	var prevPos = player[turn].position;
	var newPos = (prevPos + 3) % 40;
	player[turn].position = newPos;
	if (newPos < prevPos) {
		addamount(200, "passing GO");
	}
	updatePosition();
	land();
});
chanceCards[5] = new Card("Serverless architecture: Functions + Event Grid deployed. Collect 100 Credits.", function() { addamount(100, "Serverless Deployed");});
chanceCards[6] = new Card("Autoscaling tuned: Move forward 2 spaces.", function() {
	var prevPos = player[turn].position;
	var newPos = (prevPos + 2) % 40;
	player[turn].position = newPos;
	if (newPos < prevPos) {
		addamount(200, "passing GO");
	}
	updatePosition();
	land();
});
chanceCards[7] = new Card("Misrouted UDR: Go back 3 spaces.", function() { gobackthreespaces();});
chanceCards[8] = new Card("Compliance attestation passed: Collect 150 Credits.", function() { addamount(150, "Compliance Passed");});
chanceCards[9] = new Card("Architecture review: 40 Credits per deployed instance, 115 per premium SKU.", function() { streetrepairs(40, 115);});
chanceCards[10] = new Card("Move to GO (Collect $200).", function() { advance(0);});
chanceCards[11] = new Card("Data platform sprint: Move to Azure Synapse Analytics. If you pass GO, collect 200 Credits.", function() { advance(37);});
chanceCards[12] = new Card("Identity milestone: Move to Microsoft Entra ID (Azure AD). If you pass GO, collect 200 Credits.", function() { advance(31);});
chanceCards[13] = new Card("Shared-services cross-charge: Pay each player 50 Credits.", function() { payeachplayer(50, "Shared Services");});
chanceCards[14] = new Card("Tech Support case opened: Go directly to Tech Support.", function() { gotojail();});
chanceCards[15] = new Card("Move to ExpressRoute. If you pass GO, collect $200.", function() { advance(5);});

corrections();
