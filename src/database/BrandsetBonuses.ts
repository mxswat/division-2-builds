import { IBrandSetBonuses } from "./types";

// A massive thank you to jcalz for this pattern
const asBrandSetBonuses = <T extends IBrandSetBonuses>(o: T) => o;

export const BrandSetBonuses = asBrandSetBonuses({
  Tactical: [
    [ [ 'Health', 10 ] ],
    [ [ 'IncomingRepairs', 20 ] ],
    [ [ 'HazardProtection', 10 ] ]
  ],
  AiraldiHoldings: [
    [ [ 'MarksmanRifleDamage', 10 ] ],
    [ [ 'HeadshotDamage', 15 ] ],
    [ [ 'DamageToArmor', 5 ] ]
  ],
  AlpsSummitArmaments: [
    [ [ 'RepairSkills', 20 ] ],
    [ [ 'SkillDuration', 20 ] ],
    [ [ 'SkillHaste', 10 ] ]
  ],
  BadgerTuff: [
    [ [ 'ShotgunDamage', 10 ] ],
    [ [ 'TotalArmor', 5 ] ],
    [ [ 'ArmorOnKill', 10 ] ]
  ],
  CeskaVyrobaSro: [
    [ [ 'CriticalHitChance', 10 ] ],
    [ [ 'HazardProtection', 10 ] ],
    [ [ 'Health', 10 ] ]
  ],
  ChinaLightIndustriesCorporation: [
    [ [ 'ExplosiveDamage', 15 ] ],
    [ [ 'SkillHaste', 10 ] ],
    [ [ 'StatusEffects', 10 ] ]
  ],
  DouglasHarding: [
    [ [ 'PistolDamage', 20 ] ],
    [ [ 'Stability', 20 ] ],
    [ [ 'Accuracy', 20 ] ]
  ],
  FenrisGroupAb: [
    [ [ 'AssaultRifleDamage', 10 ] ],
    [ [ 'ReloadSpeed', 20 ] ],
    [ [ 'Stability', 20 ] ]
  ],
  GilaGuard: [
    [ [ 'TotalArmor', 5 ] ],
    [ [ 'Health', 10 ] ],
    [ [ 'ArmorRegeneration', 1 ] ]
  ],
  GolanGearLtd: [
    [ [ 'StatusEffects', 10 ] ],
    [ [ 'ArmorRegeneration', 1 ] ],
    [ [ 'TotalArmor', 5 ] ]
  ],
  GrupoSombraSa: [
    [ [ 'CriticalHitDamage', 15 ] ],
    [ [ 'ExplosiveDamage', 15 ] ],
    [ [ 'HeadshotDamage', 15 ] ]
  ],
  HanauCorporation: [
    [ [ 'SkillHaste', 10 ] ],
    [ [ 'SkillDamage', 10 ] ],
    [ [ 'WeaponDamage', 5 ] ]
  ],
  MurakamiIndustries: [
    [ [ 'SkillDuration', 20 ] ],
    [ [ 'RepairSkills', 20 ] ],
    [ [ 'SkillDamage', 10 ] ]
  ],
  OverlordArmaments: [
    [ [ 'RifleDamage', 10 ] ],
    [ [ 'Accuracy', 20 ] ],
    [ [ 'WeaponHandling', 10 ] ]
  ],
  PetrovDefenseGroup: [
    [ [ 'LmgDamage', 10 ] ],
    [ [ 'WeaponHandling', 10 ] ],
    [ [ 'AmmoCapacity', 20 ] ]
  ],
  ProvidenceDefense: [
    [ [ 'HeadshotDamage', 15 ] ],
    [ [ 'CriticalHitChance', 10 ] ],
    [ [ 'CriticalHitDamage', 15 ] ]
  ],
  RichterKaiserGmbh: [
    [ [ 'IncomingRepairs', 20 ] ],
    [ [ 'ExplosiveResistance', 10 ] ],
    [ [ 'RepairSkills', 20 ] ]
  ],
  SokolovConcern: [
    [ [ 'SmgDamage', 10 ] ],
    [ [ 'CriticalHitDamage', 15 ] ],
    [ [ 'CriticalHitChance', 10 ] ]
  ],
  WyvernWear: [
    [ [ 'SkillDamage', 10 ] ],
    [ [ 'StatusEffects', 10 ] ],
    [ [ 'SkillDuration', 20 ] ]
  ],
  YaahlGear: [
    [ [ 'HazardProtection', 10 ] ],
    [ [ 'WeaponDamage', 5 ] ],
    [ [ 'PulseResistance', 40 ] ]
  ],
  HardWired: [
    [],
    [ [ 'SkillHaste', 15 ] ],
    [ [ 'RepairSkills', 30 ], [ 'SkillDamage', 15 ] ],
    [ [ 'FeedbackLoop', null ] ]
  ],
  OngoingDirective: [
    [],
    [ [ 'StatusEffects', 15 ] ],
    [ [ 'ReloadSpeed', 30 ] ],
    [ [ 'RulesOfEngagement', null ] ]
  ],
  TruePatriot: [
    [],
    [ [ 'AmmoCapacity', 30 ] ],
    [ [ 'MagazineSize', 30 ] ],
    [ [ 'RedWhiteAndBlue', null ] ]
  ],
  AcesEights: [
    [],
    [ [ 'MarksmanRifleDamage', 15 ] ],
    [ [ 'HeadshotDamage', 30 ] ],
    [ [ 'DeadMansHand', null ] ]
  ],
  NegotiatorsDilemma: [
    [],
    [ [ 'CriticalHitChance', 15 ] ],
    [ [ 'CriticalHitDamage', 20 ] ],
    [ [ 'HostileNegotiations', null ] ]
  ],
  TipOfTheSpear: [
    [],
    [ [ 'SignatureWeaponDamage', 10 ] ],
    [ [ 'WeaponDamage', 10 ] ],
    [ [ 'AggressiveRecon', null ] ]
  ],
  FoundryBulwark: [
    [],
    [ [ 'TotalArmor', 10 ] ],
    [ [ 'ArmorRegeneration', 1 ], [ 'ShieldHealth', 50 ] ],
    [ [ 'MakeshiftRepairs', null ] ]
  ],
  FutureInitiative: [
    [],
    [ [ 'RepairSkills', 15 ] ],
    [ [ 'SkillDuration', 30 ], [ 'SkillHaste', 15 ] ],
    [ [ 'GroundControl', null ] ]
  ],
  StrikersBattlegear: [
    [],
    [ [ 'WeaponHandling', 15 ] ],
    [ [ 'RateOfFire', 15 ] ],
    [ [ 'StrikersGamble', null ] ]
  ],
  SystemCorruption: [
    [],
    [ [ 'ArmorOnKill', 15 ] ],
    [ [ 'PulseResistance', 40 ], [ 'DisruptResistance', 40 ] ],
    [ [ 'HackstepProtocol', null ] ]
  ],
  WalkerHarrisCo: [
    [ [ 'WeaponDamage', 5 ] ],
    [ [ 'DamageToArmor', 5 ] ],
    [ [ 'DamageToHealth', 5 ] ]
  ],
  EclipseProtocol: [
    [],
    [ [ 'StatusEffects', 15 ] ],
    [ [ 'SkillHaste', 15 ], [ 'HazardProtection', 30 ] ],
    [ [ 'IndirectTransmission', null ] ]
  ],
  HuntersFury: [
    [],
    [ [ 'SmgDamage', 15 ], [ 'ShotgunDamage', 15 ] ],
    [ [ 'ArmorOnKill', 20 ], [ 'HealthOnKill', 100 ] ],
    [ [ 'ApexPredator', null ] ]
  ],
  EmpressInternational: [
    [ [ 'SkillHealth', 10 ] ],
    [ [ 'SkillDamage', 10 ] ],
    [ [ 'SkillEfficiency', 10 ] ]
  ],
  Rigger: [
    [],
    [ [ 'SkillHaste', 15 ] ],
    [ [ 'SkillDuration', 15 ] ],
    [ [ 'TendAndBefriend', null ] ]
  ],
  BelstoneArmory: [
    [ [ 'ArmorRegeneration', 1 ] ],
    [ [ 'ArmorOnKill', 10 ] ],
    [ [ 'IncomingRepairs', 20 ] ]
  ],
  UzinaGetica: [
    [ [ 'TotalArmor', 5 ] ],
    [ [ 'ArmorOnKill', 10 ] ],
    [ [ 'HazardProtection', 10 ] ]
  ],
  Heartbreaker: [
    [],
    [ [ 'AssaultRifleDamage', 15 ], [ 'LmgDamage', 15 ] ],
    [ [ 'WeaponHandling', 15 ] ],
    [ [ 'Heartstopper', null ] ]
  ]
});
