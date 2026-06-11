import { createClient } from "@supabase/supabase-js";

export const supabase = createClient('https://taecvxzokgrwdpgwubfa.supabase.co', 'sb_publishable_VFvuAvNHJCbrC6_GmTSmvg_0843d1-z')


export const getChores = async () => {
    const {data, error} = await supabase
    .from('chore_tracker')
    .select('*')

    if(!data) return 

    return data
}

export const postChore = async (ch) => {
  const { data, error } = await supabase
    .from("chore_tracker")
    .insert([
      {
        date: ch?.date,
        name: ch?.name,
        earned_amount: ch?.earned_amount,
      },
    ])
    .select();

  if (error) {
    console.error(error);
    return null;
  }

  return data?.[0];
};