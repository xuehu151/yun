export interface Volume {
  id?: string;
  name?: string;
  description?: string;
  status: string;
  size: number;
  zone: string;
  created: string;
  multiattach: boolean;
  metadata: any;
  bootable: boolean;
  attachments: any[];
  imageMetadata: any;
  tenantId: string;
  encrypted: boolean;
  host: string;
}
