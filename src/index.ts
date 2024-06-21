import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { AuthService } from './services/auth';
import { ResourceService } from './services/resource';
import { DeviceService } from './services/device';
import { DevicePowerService } from './services/device-power';
import { LightService } from './services/light';
import { LightLevelService } from './services/light-level';
import { MotionService } from './services/motion';
import { GroupedLightService } from './services/grouped-light';
import { BridgeService } from './services/bridge';
import { BridgeHomeService } from './services/bridge-home';
import { SceneService } from './services/scene';
import { RoomService } from './services/room';
import { ZoneService } from './services/zone';
import { TemperatureService } from './services/temperature';

export class OpenHue {
  public readonly auth: AuthService;

  public readonly resource: ResourceService;

  public readonly device: DeviceService;

  public readonly devicePower: DevicePowerService;

  public readonly light: LightService;

  public readonly lightLevel: LightLevelService;

  public readonly motion: MotionService;

  public readonly groupedLight: GroupedLightService;

  public readonly bridge: BridgeService;

  public readonly bridgeHome: BridgeHomeService;

  public readonly scene: SceneService;

  public readonly room: RoomService;

  public readonly zone: ZoneService;

  public readonly temperature: TemperatureService;

  constructor(public config: SdkConfig) {
    const baseUrl = config.environment || config.baseUrl || Environment.DEFAULT;
    this.config = {
      ...config,
      baseUrl,
    };
    this.auth = new AuthService(this.config);

    this.resource = new ResourceService(this.config);

    this.device = new DeviceService(this.config);

    this.devicePower = new DevicePowerService(this.config);

    this.light = new LightService(this.config);

    this.lightLevel = new LightLevelService(this.config);

    this.motion = new MotionService(this.config);

    this.groupedLight = new GroupedLightService(this.config);

    this.bridge = new BridgeService(this.config);

    this.bridgeHome = new BridgeHomeService(this.config);

    this.scene = new SceneService(this.config);

    this.room = new RoomService(this.config);

    this.zone = new ZoneService(this.config);

    this.temperature = new TemperatureService(this.config);
  }

  set baseUrl(baseUrl: string) {
    this.auth.baseUrl = baseUrl;
    this.resource.baseUrl = baseUrl;
    this.device.baseUrl = baseUrl;
    this.devicePower.baseUrl = baseUrl;
    this.light.baseUrl = baseUrl;
    this.lightLevel.baseUrl = baseUrl;
    this.motion.baseUrl = baseUrl;
    this.groupedLight.baseUrl = baseUrl;
    this.bridge.baseUrl = baseUrl;
    this.bridgeHome.baseUrl = baseUrl;
    this.scene.baseUrl = baseUrl;
    this.room.baseUrl = baseUrl;
    this.zone.baseUrl = baseUrl;
    this.temperature.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.auth.baseUrl = environment;
    this.resource.baseUrl = environment;
    this.device.baseUrl = environment;
    this.devicePower.baseUrl = environment;
    this.light.baseUrl = environment;
    this.lightLevel.baseUrl = environment;
    this.motion.baseUrl = environment;
    this.groupedLight.baseUrl = environment;
    this.bridge.baseUrl = environment;
    this.bridgeHome.baseUrl = environment;
    this.scene.baseUrl = environment;
    this.room.baseUrl = environment;
    this.zone.baseUrl = environment;
    this.temperature.baseUrl = environment;
  }

  set apiKey(apiKey: string) {
    this.auth.apiKey = apiKey;
    this.resource.apiKey = apiKey;
    this.device.apiKey = apiKey;
    this.devicePower.apiKey = apiKey;
    this.light.apiKey = apiKey;
    this.lightLevel.apiKey = apiKey;
    this.motion.apiKey = apiKey;
    this.groupedLight.apiKey = apiKey;
    this.bridge.apiKey = apiKey;
    this.bridgeHome.apiKey = apiKey;
    this.scene.apiKey = apiKey;
    this.room.apiKey = apiKey;
    this.zone.apiKey = apiKey;
    this.temperature.apiKey = apiKey;
  }

  set apiKeyHeader(apiKeyHeader: string) {
    this.auth.apiKeyHeader = apiKeyHeader;
    this.resource.apiKeyHeader = apiKeyHeader;
    this.device.apiKeyHeader = apiKeyHeader;
    this.devicePower.apiKeyHeader = apiKeyHeader;
    this.light.apiKeyHeader = apiKeyHeader;
    this.lightLevel.apiKeyHeader = apiKeyHeader;
    this.motion.apiKeyHeader = apiKeyHeader;
    this.groupedLight.apiKeyHeader = apiKeyHeader;
    this.bridge.apiKeyHeader = apiKeyHeader;
    this.bridgeHome.apiKeyHeader = apiKeyHeader;
    this.scene.apiKeyHeader = apiKeyHeader;
    this.room.apiKeyHeader = apiKeyHeader;
    this.zone.apiKeyHeader = apiKeyHeader;
    this.temperature.apiKeyHeader = apiKeyHeader;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c