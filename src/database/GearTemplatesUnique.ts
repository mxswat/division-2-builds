import { IGearTemplateUnique } from "./types";

const asGearTemplates = <T extends Array<IGearTemplateUnique>>(o: T) => o;

export const UniqueGearTemplates = asGearTemplates([
  {
    id: 'AcostasGobag',
    brand: 'Exotic',
    quality: 'Exotic',
    coreAttribute: 'SkillTier',
    minorAttribute: 'SkillHaste',
    minorAttribute2: 'SkillDamage',
    slot: [ 'Backpack' ],
    talent: 'OneInHand'
  },
  {
    id: 'AcesEightsBackpack',
    brand: 'AcesEights',
    quality: 'Gearset',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    slot: [ 'Backpack' ],
    talent: 'PokerFace'
  },
  {
    id: 'PercussiveMaintenance',
    brand: 'AlpsSummitArmaments',
    quality: 'Named',
    coreAttribute: 'SkillTier',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Backpack' ],
    talent: 'PerfectTechSupport'
  },
  {
    id: 'DevilsDue',
    brand: 'CeskaVyrobaSro',
    quality: 'Named',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Backpack' ],
    talent: 'PerfectClutch'
  },
  {
    id: 'StrategicAlignment',
    brand: 'ChinaLightIndustriesCorporation',
    quality: 'Named',
    coreAttribute: 'SkillTier',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Backpack' ],
    talent: 'PerfectShockAndAwe'
  },
  {
    id: 'FoundryBulwarkBackpack',
    brand: 'FoundryBulwark',
    quality: 'Gearset',
    coreAttribute: 'Armor',
    minorAttribute: '*',
    slot: [ 'Backpack' ],
    talent: 'ProcessRefinery'
  },
  {
    id: 'FutureInitiativeBackpack',
    brand: 'FutureInitiative',
    quality: 'Gearset',
    coreAttribute: 'SkillTier',
    minorAttribute: '*',
    slot: [ 'Backpack' ],
    talent: 'StrategicCombatSupport'
  },
  {
    id: 'AnarchistsCookbook',
    brand: 'GolanGearLtd',
    quality: 'Named',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Backpack' ],
    talent: 'PerfectlyWicked'
  },
  {
    id: 'ForceMultiplier',
    brand: 'HanauCorporation',
    quality: 'Named',
    coreAttribute: 'SkillTier',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Backpack' ],
    talent: 'PerfectCombinedArms'
  },
  {
    id: 'HardWiredBackpack',
    brand: 'HardWired',
    quality: 'Gearset',
    coreAttribute: 'SkillTier',
    minorAttribute: '*',
    slot: [ 'Backpack' ],
    talent: 'ShortCircuit'
  },
  {
    id: 'NegotiatorsDilemmaBackpack',
    brand: 'NegotiatorsDilemma',
    quality: 'Gearset',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    slot: [ 'Backpack' ],
    talent: 'CriticalMeasures'
  },
  {
    id: 'OngoingDirectiveBackpack',
    brand: 'OngoingDirective',
    quality: 'Gearset',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    slot: [ 'Backpack' ],
    talent: 'TraumaSpecialist'
  },
  {
    id: 'TheGift',
    brand: 'ProvidenceDefense',
    quality: 'Named',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Backpack' ],
    talent: 'PerfectVigilance'
  },
  {
    id: 'StrikersBattlegearBackpack',
    brand: 'StrikersBattlegear',
    quality: 'Gearset',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    slot: [ 'Backpack' ],
    talent: 'RiskManagement'
  },
  {
    id: 'SystemCorruptionBackpack',
    brand: 'SystemCorruption',
    quality: 'Gearset',
    coreAttribute: 'Armor',
    minorAttribute: '*',
    slot: [ 'Backpack' ],
    talent: 'MultithreadedExecution'
  },
  {
    id: 'TipOfTheSpearBackpack',
    brand: 'TipOfTheSpear',
    quality: 'Gearset',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    slot: [ 'Backpack' ],
    talent: 'CrossbowExpert'
  },
  {
    id: 'TruePatriotBackpack',
    brand: 'TruePatriot',
    quality: 'Gearset',
    coreAttribute: 'Armor',
    minorAttribute: '*',
    slot: [ 'Backpack' ],
    talent: 'PatrioticBoost'
  },
  {
    id: 'ImprovisedBackpack',
    brand: 'Crafted',
    quality: 'HighEnd',
    coreAttribute: '*',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Backpack' ],
    talent: 'A'
  },
  {
    id: 'Matador',
    brand: 'WalkerHarrisCo',
    quality: 'Named',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Backpack' ],
    talent: 'PerfectAdrenalineRush'
  },
  {
    id: 'EclipseProtocolBackpack',
    brand: 'EclipseProtocol',
    quality: 'Gearset',
    coreAttribute: 'SkillTier',
    minorAttribute: '*',
    slot: [ 'Backpack' ],
    talent: 'SymptomAggravator'
  },
  {
    id: 'HuntersFuryBackpack',
    brand: 'HuntersFury',
    quality: 'Gearset',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    slot: [ 'Backpack' ],
    talent: 'OverwhelmingForce'
  },
  {
    id: 'RiggerBackpack',
    brand: 'Rigger',
    quality: 'Gearset',
    coreAttribute: 'SkillTier',
    minorAttribute: '*',
    slot: [ 'Backpack' ],
    talent: 'CompleteUptime'
  },
  {
    id: 'BatteryPack',
    brand: 'EmpressInternational',
    quality: 'Named',
    coreAttribute: 'SkillTier',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Backpack' ],
    talent: 'PerfectlyCalculated'
  },
  {
    id: 'Memento',
    brand: 'Exotic',
    quality: 'Exotic',
    coreAttribute: 'WeaponDamage',
    slot: [ 'Backpack' ],
    talent: 'KillConfirmed'
  },
  {
    id: 'LiquidEngineer',
    brand: 'BelstoneArmory',
    quality: 'Named',
    coreAttribute: 'Armor',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Backpack' ],
    talent: 'PerfectBloodsucker'
  },
  {
    id: 'TheSetup',
    brand: 'UzinaGetica',
    quality: 'Named',
    coreAttribute: 'Armor',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Backpack' ],
    talent: 'PerfectlyOpportunistic'
  },
  {
    id: 'HeartbreakerBackpack',
    brand: 'Heartbreaker',
    quality: 'Gearset',
    coreAttribute: 'Armor',
    minorAttribute: '*',
    slot: [ 'Backpack' ],
    talent: 'Cold'
  },
  {
    id: 'TardigradeArmorSystem',
    brand: 'Exotic',
    quality: 'Exotic',
    coreAttribute: 'Armor',
    minorAttribute: 'ExplosiveResistance',
    minorAttribute2: 'ArmorRegeneration',
    slot: [ 'Chest' ],
    talent: 'AblativeNanoplating'
  },
  {
    id: 'AcesEightsChest',
    brand: 'AcesEights',
    quality: 'Gearset',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    slot: [ 'Chest' ],
    talent: 'NoLimit'
  },
  {
    id: 'PristineExample',
    brand: 'AiraldiHoldings',
    quality: 'Named',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Chest' ],
    talent: 'PerfectFocus'
  },
  {
    id: 'ZeroFs',
    brand: 'BadgerTuff',
    quality: 'Named',
    coreAttribute: 'Armor',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Chest' ],
    talent: 'PerfectlyUnbreakable'
  },
  {
    id: 'FerociousCalm',
    brand: 'FenrisGroupAb',
    quality: 'Named',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Chest' ],
    talent: 'PerfectOverwatch'
  },
  {
    id: 'FoundryBulwarkChest',
    brand: 'FoundryBulwark',
    quality: 'Gearset',
    coreAttribute: 'Armor',
    minorAttribute: '*',
    slot: [ 'Chest' ],
    talent: 'ImprovedMaterials'
  },
  {
    id: 'FutureInitiativeChest',
    brand: 'FutureInitiative',
    quality: 'Gearset',
    coreAttribute: 'SkillTier',
    minorAttribute: '*',
    slot: [ 'Chest' ],
    talent: 'TacticalSuperiority'
  },
  {
    id: 'Pointman',
    brand: 'GilaGuard',
    quality: 'Named',
    coreAttribute: 'Armor',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Chest' ],
    talent: 'PerfectVanguard'
  },
  {
    id: 'Hunterkiller',
    brand: 'GolanGearLtd',
    quality: 'Named',
    coreAttribute: 'Armor',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Chest' ],
    talent: 'PerfectIntimidate'
  },
  {
    id: 'DoorkickersKnock',
    brand: 'GrupoSombraSa',
    quality: 'Named',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Chest' ],
    talent: 'PerfectSpark'
  },
  {
    id: 'HardWiredChest',
    brand: 'HardWired',
    quality: 'Gearset',
    coreAttribute: 'SkillTier',
    minorAttribute: '*',
    slot: [ 'Chest' ],
    talent: 'PositiveReinforcement'
  },
  {
    id: 'NegotiatorsDilemmaChest',
    brand: 'NegotiatorsDilemma',
    quality: 'Gearset',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    slot: [ 'Chest' ],
    talent: 'TargetRichEnvironment'
  },
  {
    id: 'OngoingDirectiveChest',
    brand: 'OngoingDirective',
    quality: 'Gearset',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    slot: [ 'Chest' ],
    talent: 'ParabellumRounds'
  },
  {
    id: 'VedmedytsyaVest',
    brand: 'PetrovDefenseGroup',
    quality: 'Named',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Chest' ],
    talent: 'PerfectBraced'
  },
  {
    id: 'TheSacrifice',
    brand: 'ProvidenceDefense',
    quality: 'Named',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Chest' ],
    talent: 'PerfectGlassCannon'
  },
  {
    id: 'StrikersBattlegearChest',
    brand: 'StrikersBattlegear',
    quality: 'Gearset',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    slot: [ 'Chest' ],
    talent: 'PressTheAdvantage'
  },
  {
    id: 'SystemCorruptionChest',
    brand: 'SystemCorruption',
    quality: 'Gearset',
    coreAttribute: 'Armor',
    minorAttribute: '*',
    slot: [ 'Chest' ],
    talent: 'CompilerOptimization'
  },
  {
    id: 'TipOfTheSpearChest',
    brand: 'TipOfTheSpear',
    quality: 'Gearset',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    slot: [ 'Chest' ],
    talent: 'SpecializedDestruction'
  },
  {
    id: 'TruePatriotChest',
    brand: 'TruePatriot',
    quality: 'Gearset',
    coreAttribute: 'Armor',
    minorAttribute: '*',
    slot: [ 'Chest' ],
    talent: 'WavingTheFlag'
  },
  {
    id: 'ImprovisedBodyArmor',
    brand: 'Crafted',
    quality: 'HighEnd',
    coreAttribute: '*',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Chest' ],
    talent: 'A'
  },
  {
    id: 'Chainkiller',
    brand: 'WalkerHarrisCo',
    quality: 'Named',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Chest' ],
    talent: 'PerfectHeadhunter'
  },
  {
    id: 'EclipseProtocolChest',
    brand: 'EclipseProtocol',
    quality: 'Gearset',
    coreAttribute: 'SkillTier',
    minorAttribute: '*',
    slot: [ 'Chest' ],
    talent: 'Proliferation'
  },
  {
    id: 'HuntersFuryChest',
    brand: 'HuntersFury',
    quality: 'Gearset',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    slot: [ 'Chest' ],
    talent: 'EndlessHunger'
  },
  {
    id: 'RiggerChest',
    brand: 'Rigger',
    quality: 'Gearset',
    coreAttribute: 'SkillTier',
    minorAttribute: '*',
    slot: [ 'Chest' ],
    talent: 'BestBuds'
  },
  {
    id: 'CaesarsGuard',
    brand: 'EmpressInternational',
    quality: 'Named',
    coreAttribute: 'SkillTier',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Chest' ],
    talent: 'PerfectlySkilled'
  },
  {
    id: 'RidgewaysPride',
    brand: 'Exotic',
    quality: 'Exotic',
    coreAttribute: 'WeaponDamage',
    minorAttribute: 'CriticalHitChance',
    minorAttribute2: 'CriticalHitDamage',
    slot: [ 'Chest' ],
    talent: 'BleedingEdge'
  },
  {
    id: 'EverydayCarrier',
    brand: 'BelstoneArmory',
    quality: 'Named',
    coreAttribute: 'Armor',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Chest' ],
    talent: 'PerfectlyEfficient'
  },
  {
    id: 'Closer',
    brand: 'UzinaGetica',
    quality: 'Named',
    coreAttribute: 'Armor',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Chest' ],
    talent: 'PerfectSpotter'
  },
  {
    id: 'HeartbreakerChest',
    brand: 'Heartbreaker',
    quality: 'Gearset',
    coreAttribute: 'Armor',
    minorAttribute: '*',
    slot: [ 'Chest' ],
    talent: 'MaxBpm'
  },
  {
    id: 'BtsuGloves',
    brand: 'Exotic',
    quality: 'Exotic',
    coreAttribute: 'SkillTier',
    minorAttribute: 'SkillHaste',
    minorAttribute2: 'RepairSkills',
    slot: [ 'Gloves' ],
    talent: 'TransferenceOverclock'
  },
  {
    id: 'AcesEights',
    brand: 'AcesEights',
    quality: 'Gearset',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    slot: [ 'Gloves', 'Holster', 'Kneepads', 'Mask' ]
  },
  {
    id: 'FoundryBulwark',
    brand: 'FoundryBulwark',
    quality: 'Gearset',
    coreAttribute: 'Armor',
    minorAttribute: '*',
    slot: [ 'Gloves', 'Holster', 'Kneepads', 'Mask' ]
  },
  {
    id: 'FutureInitiative',
    brand: 'FutureInitiative',
    quality: 'Gearset',
    coreAttribute: 'SkillTier',
    minorAttribute: '*',
    slot: [ 'Gloves', 'Holster', 'Kneepads', 'Mask' ]
  },
  {
    id: 'HardWired',
    brand: 'HardWired',
    quality: 'Gearset',
    coreAttribute: 'SkillTier',
    minorAttribute: '*',
    slot: [ 'Gloves', 'Holster', 'Kneepads', 'Mask' ]
  },
  {
    id: 'NegotiatorsDilemma',
    brand: 'NegotiatorsDilemma',
    quality: 'Gearset',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    slot: [ 'Gloves', 'Holster', 'Kneepads', 'Mask' ]
  },
  {
    id: 'OngoingDirective',
    brand: 'OngoingDirective',
    quality: 'Gearset',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    slot: [ 'Gloves', 'Holster', 'Kneepads', 'Mask' ]
  },
  {
    id: 'StrikersBattlegear',
    brand: 'StrikersBattlegear',
    quality: 'Gearset',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    slot: [ 'Gloves', 'Holster', 'Kneepads', 'Mask' ]
  },
  {
    id: 'SystemCorruption',
    brand: 'SystemCorruption',
    quality: 'Gearset',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    slot: [ 'Gloves', 'Holster', 'Kneepads', 'Mask' ]
  },
  {
    id: 'TipOfTheSpear',
    brand: 'TipOfTheSpear',
    quality: 'Gearset',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    slot: [ 'Gloves', 'Holster', 'Kneepads', 'Mask' ]
  },
  {
    id: 'TruePatriot',
    brand: 'TruePatriot',
    quality: 'Gearset',
    coreAttribute: 'Armor',
    minorAttribute: '*',
    slot: [ 'Gloves', 'Holster', 'Kneepads', 'Mask' ]
  },
  {
    id: 'EclipseProtocol',
    brand: 'EclipseProtocol',
    quality: 'Gearset',
    coreAttribute: 'SkillTier',
    minorAttribute: '*',
    slot: [ 'Gloves', 'Holster', 'Kneepads', 'Mask' ]
  },
  {
    id: 'HuntersFury',
    brand: 'HuntersFury',
    quality: 'Gearset',
    coreAttribute: 'WeaponDamage',
    minorAttribute: '*',
    slot: [ 'Gloves', 'Holster', 'Kneepads', 'Mask' ]
  },
  {
    id: 'Rigger',
    brand: 'Rigger',
    quality: 'Gearset',
    coreAttribute: 'SkillTier',
    minorAttribute: '*',
    slot: [ 'Gloves', 'Holster', 'Kneepads', 'Mask' ]
  },
  {
    id: 'ImprovisedGloves',
    brand: 'Crafted',
    quality: 'HighEnd',
    coreAttribute: '*',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Gloves' ]
  },
  {
    id: 'Deathgrips',
    brand: 'Tactical',
    quality: 'Named',
    coreAttribute: 'Armor',
    minorAttribute: 'ArmorOnKill',
    minorAttribute2: '*',
    slot: [ 'Gloves' ]
  },
  {
    id: 'MotherlyLove',
    brand: 'AlpsSummitArmaments',
    quality: 'Named',
    coreAttribute: 'SkillTier',
    minorAttribute: 'SkillHealth',
    minorAttribute2: '*',
    slot: [ 'Gloves' ]
  },
  {
    id: 'ContractorsGloves',
    brand: 'PetrovDefenseGroup',
    quality: 'Named',
    coreAttribute: 'WeaponDamage',
    minorAttribute: 'DamageToArmor',
    minorAttribute2: '*',
    slot: [ 'Gloves' ]
  },
  {
    id: 'FirmHandshake',
    brand: 'SokolovConcern',
    quality: 'Named',
    coreAttribute: 'WeaponDamage',
    minorAttribute: 'StatusEffects',
    minorAttribute2: '*',
    slot: [ 'Gloves' ]
  },
  {
    id: 'Heartbreaker',
    brand: 'Heartbreaker',
    quality: 'Gearset',
    coreAttribute: 'Armor',
    minorAttribute: '*',
    slot: [ 'Gloves', 'Holster', 'Kneepads', 'Mask' ]
  },
  {
    id: 'DodgeCityGunslingersHolster',
    brand: 'Exotic',
    quality: 'Exotic',
    coreAttribute: 'WeaponDamage',
    minorAttribute: 'WeaponHandling',
    minorAttribute2: 'HeadshotDamage',
    slot: [ 'Holster' ],
    talent: 'QuickDraw'
  },
  {
    id: 'ImperialDynasty',
    brand: 'Exotic',
    quality: 'Exotic',
    coreAttribute: 'SkillTier',
    minorAttribute: 'StatusEffects',
    minorAttribute2: 'HazardProtection',
    slot: [ 'Holster' ],
    talent: 'DragonsGlare'
  },
  {
    id: 'AmmoDump',
    brand: 'BadgerTuff',
    quality: 'Named',
    coreAttribute: 'Armor',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Holster' ],
    talent: 'AmmoCapacity'
  },
  {
    id: 'Forge',
    brand: 'RichterKaiserGmbh',
    quality: 'Named',
    coreAttribute: 'SkillTier',
    minorAttribute: 'ShieldHealth',
    minorAttribute2: '*',
    slot: [ 'Holster' ]
  },
  {
    id: 'ClawsOut',
    brand: 'WyvernWear',
    quality: 'Named',
    coreAttribute: 'SkillTier',
    minorAttribute: 'MeleeDamage',
    minorAttribute2: 'PistolDamage',
    slot: [ 'Holster' ]
  },
  {
    id: 'ImprovisedHolster',
    brand: 'Crafted',
    quality: 'HighEnd',
    coreAttribute: '*',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Holster' ]
  },
  {
    id: 'Waveform',
    brand: 'Exotic',
    quality: 'Exotic',
    coreAttribute: 'SkillTier',
    minorAttribute: 'SkillDamage',
    minorAttribute2: 'SkillHaste',
    slot: [ 'Holster' ],
    talent: 'AlternatingCurrent'
  },
  {
    id: 'NinjabikeMessengerKneepads',
    brand: 'Exotic',
    quality: 'Exotic',
    coreAttribute: 'WeaponDamage',
    minorAttribute: 'CriticalHitChance',
    minorAttribute2: 'CriticalHitDamage',
    slot: [ 'Kneepads' ],
    talent: 'Parkour'
  },
  {
    id: 'SawyersKneepads',
    brand: 'Exotic',
    quality: 'Exotic',
    coreAttribute: 'Armor',
    minorAttribute: 'ExplosiveResistance',
    minorAttribute2: 'Health',
    slot: [ 'Kneepads' ],
    talent: 'StandYourGround'
  },
  {
    id: 'EmperorsGuard',
    brand: 'MurakamiIndustries',
    quality: 'Named',
    coreAttribute: 'SkillTier',
    minorAttribute: 'ArmorRegeneration',
    minorAttribute2: '*',
    slot: [ 'Kneepads' ]
  },
  {
    id: 'FoxsPrayer',
    brand: 'OverlordArmaments',
    quality: 'Named',
    coreAttribute: 'WeaponDamage',
    minorAttribute: 'DamageToToc',
    minorAttribute2: '*',
    slot: [ 'Kneepads' ]
  },
  {
    id: 'ImprovisedKneepads',
    brand: 'Crafted',
    quality: 'HighEnd',
    coreAttribute: '*',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Kneepads' ]
  },
  {
    id: 'CoyotesMask',
    brand: 'Exotic',
    quality: 'Exotic',
    coreAttribute: 'WeaponDamage',
    minorAttribute: 'CriticalHitChance',
    minorAttribute2: 'CriticalHitDamage',
    slot: [ 'Mask' ],
    talent: 'PackInstincts'
  },
  {
    id: 'PunchDrunk',
    brand: 'DouglasHarding',
    quality: 'Named',
    coreAttribute: 'WeaponDamage',
    minorAttribute: 'HeadshotDamage',
    minorAttribute2: '*',
    slot: [ 'Mask' ]
  },
  {
    id: 'Nightwatcher',
    brand: 'GilaGuard',
    quality: 'Named',
    coreAttribute: 'Armor',
    minorAttribute: 'ScannerPulseHaste',
    minorAttribute2: '*',
    slot: [ 'Mask' ]
  },
  {
    id: 'TheHollowMan',
    brand: 'YaahlGear',
    quality: 'Named',
    coreAttribute: 'Armor',
    minorAttribute: 'HealthDamage',
    minorAttribute2: '*',
    slot: [ 'Mask' ]
  },
  {
    id: 'ImprovisedMask',
    brand: 'Crafted',
    quality: 'HighEnd',
    coreAttribute: '*',
    minorAttribute: '*',
    minorAttribute2: '*',
    slot: [ 'Mask' ]
  },
  {
    id: 'Vile',
    brand: 'Exotic',
    quality: 'Exotic',
    coreAttribute: 'SkillTier',
    minorAttribute: 'StatusEffects',
    minorAttribute2: 'HazardProtection',
    slot: [ 'Mask' ],
    talent: 'ToxicDelivery'
  },
  {
    id: 'ChillOut',
    brand: 'Crafted',
    quality: 'Named',
    coreAttribute: 'Armor',
    minorAttribute: '*',
    slot: [ 'Mask' ],
    talent: 'SecondModSlot'
  },
  {
    id: 'Catharsis',
    brand: 'Exotic',
    quality: 'Exotic',
    coreAttribute: 'Armor',
    minorAttribute: 'IncomingRepairs',
    minorAttribute2: 'ArmorRegeneration',
    slot: [ 'Mask' ],
    talent: 'ViciousCycle'
  }
]);

