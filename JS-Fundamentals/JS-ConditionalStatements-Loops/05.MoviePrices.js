function MoviePrices([film,day]){
     film = film.toLowerCase();
  if(film=="the godfather")
      switch (day.toLowerCase()){
          case "monday": return 12;
          case "tuesday": return 10;
          case "wednesday": return 15;
          case "thursday": return 12.50;
          case "friday": return 15;
          case "saturday": return 25;
          case "sunday": return 30;
          default: return "error";
      }
      else  if(film=="schindler's list")
      switch (day.toLowerCase()){
          case "monday": return 8.50;
          case "tuesday": return 8.50;
          case "wednesday": return 8.50;
          case "thursday": return 8.50;
          case "friday": return 8.50; case "saturday":
          case "sunday": return 15; case "monday": r
          default: return "error";
      }
  else  if(film=="casablanca")
      switch (day.toLowerCase()){
           case "monday":  return 8;
           case "tuesday":  return 8;
          case "wednesday": return 8;
           case "thursday": return 8;
           case "friday":   return 8;
           case "saturday": return 8;
           case "sunday":  return 10;
          default: return "error";
      }
  else  if(film=="the wizard of oz")
      switch (day.toLowerCase()){
          case  "monday":  return 10;
          case  "tuesday":  return 10;
          case "wednesday": return 10;
          case  "thursday": return 10;
          case  "friday":   return 10;
          case  "saturday": return 15;
          case  "sunday":   return 15;
          default: return "error";
      }

}

MoviePrices(['The Godfather','Friday']);
