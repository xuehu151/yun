import { SecurityGroup } from './securitygroup';
import { Metadata } from './metadata';
import { Flavor } from './flavor';
import { Link } from './link';
import { IP } from './ip';
import { Image } from './image';
import { Addresses } from './addresses';


export enum InstanceStatus {
  ACTIVE,
  BUILD,
  DELETED,
  ERROR,
  HARD_REBOOT,
  MIGRATING,
  PASSWORD,
  PAUSED,
  REBOOT,
  REBUILD,
  RESCUE,
  RESIZE,
  REVERT_RESIZE,
  SHELVED,
  SHELVED_OFFLOADED,
  SHUTOFF,
  SOFT_DELETED,
  SUSPENDED,
  UNKNOWN,
  VERIFY_RESIZE,
}

export interface Instance {
  id?: string; // 实例id
  name?: string; // 实例名称
  addresses?: Addresses; // 网络地址
  links?: Link[]; // 连接
  image?: Image;  // 镜像
  flavor?: Flavor; // 实例类型
  accessIPv4?: string;
  accessIPv6?: string;
  configDrive?: string;
  status?: InstanceStatus;
  progress?: number;
  tenantId?: string;
  userId?: string;
  keyName?: string;
  hostId?: string;
  updated?: Date;
  created?: Date;
  metadata?: Metadata;
  securityGroups?: SecurityGroup[];
  powerState?: string;
  vmState?: string;
  host?: string;
  instanceName?: string;
  hypervisorHostname?: string;
  diskConfig?: string;
  availabilityZone?: string;
  launchedAt?: Date;
  osExtendedVolumesAttachedIDs?: string[];
  taskState: string;
}
