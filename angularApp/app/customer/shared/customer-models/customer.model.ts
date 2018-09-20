export class Customer {
  public CompanyName: string;
  public CompanyPresident: string;
  public PhoneNumber: string;
  public Email: string;
  public PostCode: string;
  public Id: number;
  public IsHeadQuarter: boolean;
  public Address1: string;
  public Address2: string;
  public City: string;
  public StateOrProvince: string;
  public ZipCode: string;
  public Country: string;
  public FaxNumber: string;
  public CompanyWebsite: string;
  public PaymentMethod: string;
  public Description: string;
  public BankAccount: {
    publicBankName: string;
    BankAddress: string;
    AccountName: string;
    AccountAddress: string;
    AccountNumber: string;
    IbanNumber: string;
    AccountCurrencyId: number;
    SwiftCode: string;
    PaymentConditions: string
  }
  constructor() {
    this.CompanyName = "";
    this.CompanyPresident = "";
    this.PhoneNumber = "";
    this.Email = "";
    this.PostCode = "";
    this.Id = 0;
    this.IsHeadQuarter = false;
    this.Address1 = "";
    this.Address2 = "";
    this.City = "";
    this.StateOrProvince = "";
    this.ZipCode = "";
    this.Country = "";
    this.FaxNumber = "";
    this.CompanyWebsite = "";
    this.PaymentMethod = "";
    this.Description = "";
    this.BankAccount = {
      publicBankName: "",
      BankAddress: "",
      AccountName: "",
      AccountAddress: "",
      AccountNumber: "",
      IbanNumber: "",
      AccountCurrencyId: 0,
      SwiftCode: "",
      PaymentConditions: ""
    }
  }
}