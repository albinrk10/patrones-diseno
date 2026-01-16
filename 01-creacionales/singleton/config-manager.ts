
class ConfigManager{
    private config: Record<string, string> = { };
   
     public setConfig(Key:string, value:string):void {
      this.config[Key] = value; 
    }

    public getConfig(Key:string): string | null {
        return this.config[Key];
    }

    public getAllConfig(): Record<string, string> {
        return { ...this.config};
    }

}

export const configManager = new ConfigManager();