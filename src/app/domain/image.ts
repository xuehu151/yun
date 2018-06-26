
interface Properties {
  instance_uuid?: string;
  image_location?: string;
  image_state?: string;
  user_id?: string;
  image_type?: string;
  boot_roles?: string;
  base_image_ref?: string;
  owner_id?: string;
}

export interface Image {
  id?: number;
  name?: string;
  diskFormat?: string;
  containerFormat?: string;
  size?: number;
  checksum?: string;
  owner?: string;
  createdAt?: Date;
  updatedAt?: Date;
  status?: string;
  isPublic?: boolean;
  isDeleted?: boolean;
  isProtected?: boolean;
  minRam?: number;
  minDisk?: number;
  properties?: Properties;
}

