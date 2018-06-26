export interface K8snet {
  macAddr?: string;
  version?: number;
  addr?: string;
  type?: string;
}

export interface Addresses {
  k8snet?: K8snet[];
}

