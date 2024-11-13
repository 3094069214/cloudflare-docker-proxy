name = "cloudflare-docker-proxy"
compatibility_date = "2023-12-01"

[dev]
ip = "0.0.0.0"
port = 8787
local_protocol = "http"

[env.vars]
CUSTOM_DOMAIN = "skx2004.us.kg"

[env.dev.vars]
MODE = "debug"
TARGET_UPSTREAM = "https://registry-1.docker.io"

[env.production]
name = "cloudflare-docker-proxy"
# routes = [
#   { pattern = "docker.skx2004.us.kg", custom_domain = true },
#   { pattern = "quay.skx2004.us.kg", custom_domain = true },
#   { pattern = "gcr.skx2004.us.kg", custom_domain = true },
#   { pattern = "k8s-gcr.skx2004.us.kg", custom_domain = true },
#   { pattern = "k8s.skx2004.us.kg", custom_domain = true },
#   { pattern = "ghcr.skx2004.us.kg", custom_domain = true },
#   { pattern = "cloudsmith.skx2004.us.kg", custom_domain = true },
# ]

[env.production.vars]
MODE = "production"
TARGET_UPSTREAM = ""

[env.staging]
name = "cloudflare-docker-proxy-staging"
# route = { pattern = "docker-staging.skx2004.us.kg", custom_domain = true }

[env.staging.vars]
MODE = "staging"
TARGET_UPSTREAM = ""
